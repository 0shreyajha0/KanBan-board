// IconButton.js

import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import styles from './IconButton.module.css';

export const IconButton = ({ icon, onClick }) => {
  const IconComponent = icon;

  return (
    <button className={styles.iconButton} onClick={onClick}>
      <IconContext.Provider value={{ className: styles.icon }}>
        <IconComponent />
      </IconContext.Provider>
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired, // Requires a valid react-icons icon
  onClick: PropTypes.func, // Optional click handler
};
