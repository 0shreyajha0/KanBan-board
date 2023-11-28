import React from 'react';
import { FaCircle } from 'react-icons/fa';
import styles from './TicketTag.module.css';

export const TicketTag = (props) => {
  return (
    <div className={styles.ticketTagContainer}>
      <FaCircle style={{color: 'var(--light-grey)'}}/>
      <p className={styles.tagTitle}>{props.title}</p>
    </div>
  );
};
