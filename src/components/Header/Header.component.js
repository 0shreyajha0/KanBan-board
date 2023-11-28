import React from 'react';
import styles from './Header.module.css';
import { DropdownButton } from '../DropdownButton';

export const Header = (props) => {
  return (
    <div className={styles.headerContainer}>
      <DropdownButton {...props} />
    </div>
  );
};
