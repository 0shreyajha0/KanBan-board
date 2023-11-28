import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

export const Avatar = (props) => {
  const { image, name='' } = props;
  const getInitials = (name) => {
    const initials = name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
    return initials;
  };

  return (
    <div className={styles.avatarContainer}>
      {image ? <img className={styles.avatarImage} src={image} alt={name} /> : <div className={styles.avatarInitials}>{getInitials(name)}</div>}
    </div>
  );
};

Avatar.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired
};
