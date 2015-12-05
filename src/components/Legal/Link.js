import React from 'react';

export default ({ id, children }) => (
  <li><a href={`#${id}`}>{children}</a></li>
);
