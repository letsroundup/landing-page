import render from 'staticPage';

import 'CNAME';
import '../LICENSE';
import 'README.md';

import Landing from 'components/Landing';
import Privacy from 'components/Privacy';

import 'common/global.scss';
import 'common/anchor.scss';

// This needs to be an es5 export of the plugin explodes
module.exports = (locals, callback) => {
  switch (locals.path) {
  case '/':
    return callback(null, render({ Component: Landing }));
  case '/privacy':
    return callback(null, render({ Component: Privacy }));
  default:
    throw new Error(`path ${locals.path} cannot be rendered`);
  }
};
