import React from 'react';

import styles from './Privacy.scss';

export default ({ id, title, children }) => (
  <div className={styles.section}>
    <h1 id={id}>{title}</h1>
    <div className={styles.sectionText}>{React.Children.toArray(children)}</div>
  </div>
);
