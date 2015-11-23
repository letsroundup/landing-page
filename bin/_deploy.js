// inspired by https://github.com/AlexKVal/release-script
import { exit, rm, pushd, cp, popd, exec, ls } from 'shelljs';
import { join } from 'path';

function printErrorAndExit(error) {
  console.error(error); // eslint-disable-line no-console
  exit(1);
}

function run(command) {
  const { code, output } = exec(command);
  if (code !== 0) printErrorAndExit(output);
  return output;
}

function releaseAdRepo(repo, srcFolder, tmpFolder) {
  if (!repo || !srcFolder || !tmpFolder) {
    printErrorAndExit('Bug error. Create github issue: releaseAdRepo - One of parameters is not set.');
  }
  const v = run(`git rev-parse --short HEAD`).trim();

  rm('-rf', tmpFolder);
  run(`git clone ${repo} ${tmpFolder}`);
  pushd(tmpFolder);
  rm('-rf', ls(tmpFolder).filter((file) => file !== '.git')); // delete all but `.git` dir
  cp('-R', srcFolder, tmpFolder);
  run('git add -A .');
  run(`git commit -m "Build for commit ${v}"`);
  run('git push');
  popd();
  rm('-rf', tmpFolder);
}

const repo = 'git@github.com:letsroundup/letsroundup.github.io.git';
const src = join(__dirname, '..', 'build/*');
const tmp = join(__dirname, '..', 'tmp');
run('npm run build');
releaseAdRepo(repo, src, tmp);
