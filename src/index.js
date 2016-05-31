import render from 'staticPage';

import 'CNAME';
import '../LICENSE';
import 'README.md';

import Landing from 'components/Landing';
import Privacy from 'components/Legal/Privacy';
import TOS from 'components/Legal/TOS';

import 'common/anchor.scss';

// This needs to be an es5 export of the plugin explodes
module.exports = (locals, callback) => {
  const assetsByChunkName = locals.webpackStats.toJson().assetsByChunkName;
  switch (locals.path) {
  case '/':
    return callback(null, render({ Component: Landing, assetsByChunkName }));
  case '/privacy':
    return callback(null, render({ Component: Privacy, assetsByChunkName }));
  case '/tos':
    return callback(null, render({ Component: TOS, assetsByChunkName }));
  default:
    throw new Error(`path ${locals.path} cannot be rendered`);
  }
};
