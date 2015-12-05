import React from 'react';

import styles from './Legal.scss';

export default ({ id, title, children }) => (
  <div className={styles.section}>
    <h2 id={id}>{title}</h2>
    <div className={styles.sectionText}>{React.Children.toArray(children)}</div>
  </div>
);
