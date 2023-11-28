import React from 'react';
import styles from './FullPageLoader.module.css';

export const FullPageLoader = () => {
  return (
    <div className={styles.fullPageLoader}>
      <div className={styles.loader}></div>
    </div>
  );
};
