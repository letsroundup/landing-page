import React from 'react';

import styles from './Privacy.scss';

export default ({ id, children }) => (
  <li><a href={`#${id}`}>{children}</a></li>
);
