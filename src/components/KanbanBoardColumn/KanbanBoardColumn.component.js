import React from 'react';
import styles from './KanbanBoardColumn.module.css';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FaPlus } from 'react-icons/fa6';
import { IconButton } from '../IconButton';
import { Avatar } from '../Avatar';

export const KanbanBoardColumn = (props) => {
  return (
    <div className={styles.column}>
      <div className={styles.statusHeaderContainer}>
        <div className={styles.statusNameContainer}>
          {props.isAvatar ? <Avatar image={props.userImage} name={props.username} /> : <IconButton icon={props.statusIcon} />}
          <p className={styles.statusName}>{props.statusName}</p>
          <p className={styles.ticketCount}>{props.ticketCount}</p>
        </div>
        <div className={styles.statusActionsContainer}>
          <IconButton icon={FaPlus} />
          <IconButton icon={HiOutlineDotsHorizontal} />
        </div>
      </div>
      <div className={styles.ticketCardsWrapper}>{props.children}</div>
    </div>
  );
};
