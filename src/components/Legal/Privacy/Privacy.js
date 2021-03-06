import React from 'react';

import Legal from '../Legal';

import * as props from './PrivacySectionsContent';

export default ({ assetsByChunkName }) => (
  <Legal {...props} assetsByChunkName={assetsByChunkName} />
);
