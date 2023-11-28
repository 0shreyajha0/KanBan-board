import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import styles from './IconContainer.module.css';

export const IconContainer = ({ iconName }) => {
  const IconComponent = iconName;

  return (
    <div className={styles.iconContainer}>
      <IconContext.Provider value={{ className: styles.icon }}>
        <IconComponent />
      </IconContext.Provider>
    </div>
  );
};

IconContainer.propTypes = {
  iconName: PropTypes.elementType.isRequired,
};

