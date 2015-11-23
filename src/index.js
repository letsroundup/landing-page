import render from 'staticPage';

import 'CNAME';
import '../LICENSE';
import 'README.md';

import Landing from 'components/Landing';

import 'common/global.css';

// This needs to be an es5 export of the plugin explodes
module.exports = (locals, callback) => {
  switch (locals.path) {
  case '/':
    return callback(null, render({ Component: Landing }));
  case '/privacy':
    return callback(null, 'hello privacy');
  default:
    return callback(null, 'hello default');
  }
};
