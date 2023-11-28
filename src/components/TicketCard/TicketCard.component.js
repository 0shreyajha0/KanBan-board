import React from 'react';
import { TicketTag } from '../TicketTag';
import { Avatar } from '../Avatar/Avatar.component';
import { Card } from '../Card';
import styles from './TicketCard.module.css';
import util from '../../styles/util.module.css';
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { IconContainer } from '../IconContainer';

export const TicketCard = (props) => {
  return (
    <Card>
      <div className={styles.ticketCardHeader}>
        <h6 className={styles.ticketIdStyles}>{props.ticketId}</h6>
        <Avatar image={props.userImage} name={props.username} />
      </div>
      <div>
        <h5 className={`${styles.ticketTitle} ${util.twoLineTruncate}`}>{props.ticketTitle}</h5>
      </div>
      <div className={styles.ticketCardFooter}>
        <IconContainer iconName={MdOutlineSignalCellularAlt} />
        <TicketTag title={props.ticketTag} />
      </div>
    </Card>
  );
};
