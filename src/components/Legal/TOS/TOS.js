import React from 'react';

import Legal from '../Legal';

import * as props from './TOSSectionsContent';

export default ({ assetsByChunkName }) => (
  <Legal {...props} assetsByChunkName={assetsByChunkName} />
);
