import React from 'react';
import styles from './Card.module.css'; // Import the CSS module

export const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
};
