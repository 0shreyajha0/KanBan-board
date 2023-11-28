import React from 'react';
import styles from './KanbanBoardLayout.module.css';
import { FaPlus } from 'react-icons/fa6';
import { IoArrowBackCircle } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import { PiClockClockwiseBold } from "react-icons/pi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
import { BsExclamationSquareFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { MdOutlineSignalCellularAlt2Bar } from "react-icons/md";
import { MdOutlineSignalCellularAlt1Bar } from "react-icons/md";
import { TicketCard, KanbanBoardColumn } from '../../components';


export const KanbanBoardLayout = (props) => {
  const { categorizedStatusArray = [], categorizedPriorityArray = [], currentGrouping } = props;
  const statusConfigArray = [
    {
      statusIcon: IoArrowBackCircle,
      statusName: 'Backlog',
      isAvatar: false,
      ticketCount: categorizedStatusArray?.Backlog.length
    },
    {
      statusIcon: FaRegCircle,
      statusName: 'Todo',
      isAvatar: false,
      ticketCount: categorizedStatusArray?.Todo.length
    },
    {
      statusIcon: PiClockClockwiseBold,
      statusName: 'In Progress',
      isAvatar: false,
      ticketCount: categorizedStatusArray?.InProgress.length
    },
    {
      statusIcon: IoCheckmarkDoneCircle,
      statusName: 'Done',
      isAvatar: false,
      ticketCount: categorizedStatusArray?.Done.length
    },
    {
      statusIcon: GiCancel,
      statusName: 'Canceled',
      isAvatar: false,
      ticketCount: categorizedStatusArray?.Canceled.length
    }
  ];

  const priorityConfigArray = [
    {
      statusIcon: BsThreeDots,
      statusName: 'No priority',
      isAvatar: false,
      ticketCount: categorizedPriorityArray[0].length
    },
    {
      statusIcon: BsExclamationSquareFill,
      statusName: 'Urgent',
      isAvatar: false,
      ticketCount: categorizedPriorityArray[1].length
    },
    {
      statusIcon: MdOutlineSignalCellularAlt,
      statusName: 'High',
      isAvatar: false,
      ticketCount: categorizedPriorityArray[2].length
    },
    {
      statusIcon: MdOutlineSignalCellularAlt2Bar,
      statusName: 'Medium',
      isAvatar: false,
      ticketCount: categorizedPriorityArray[3].length
    },
    {
      statusIcon: MdOutlineSignalCellularAlt1Bar,
      statusName: 'Low',
      isAvatar: false,
      ticketCount: categorizedPriorityArray[4].length
    }
  ];

  return (
    <div className={styles.kanbanBoardLayoutContainer}>
      {currentGrouping === 'status' ? (
        <>
          <KanbanBoardColumn {...statusConfigArray[0]}>
            {categorizedStatusArray?.Backlog.map((ticket, index) => (
              <TicketCard key={index} ticketId={ticket.id} username={ticket.userId} ticketTitle={ticket.title} ticketTag={ticket.tag[0]} />
            ))}
          </KanbanBoardColumn>
          <KanbanBoardColumn {...statusConfigArray[1]}>
            {categorizedStatusArray?.Todo.map((ticket, index) => (
              <TicketCard key={index} ticketId={ticket.id} username={ticket.userId} ticketTitle={ticket.title} ticketTag={ticket.tag[0]} />
            ))}
          </KanbanBoardColumn>
          <KanbanBoardColumn {...statusConfigArray[2]}>
            {categorizedStatusArray?.InProgress.map((ticket, index) => (
              <TicketCard key={index} ticketId={ticket.id} username={ticket.userId} ticketTitle={ticket.title} ticketTag={ticket.tag[0]} />
            ))}
          </KanbanBoardColumn>
          <KanbanBoardColumn {...statusConfigArray[3]}>
            {categorizedStatusArray?.Done.map((ticket, index) => (
              <TicketCard key={index} ticketId={ticket.id} username={ticket.userId} ticketTitle={ticket.title} ticketTag={ticket.tag[0]} />
            ))}
          </KanbanBoardColumn>
          <KanbanBoardColumn {...statusConfigArray[4]}>
            {categorizedStatusArray?.Canceled.map((ticket, index) => (
              <TicketCard key={index} ticketId={ticket.id} username={ticket.userId} ticketTitle={ticket.title} ticketTag={ticket.tag[0]} />
            ))}
          </KanbanBoardColumn>
        </>
      ) : (
        <>
          <KanbanBoardColumn {...priorityConfigArray[0]}>
            {categorizedPriorityArray[0].map((ticket, index) => (
              <TicketCard key={index} ticketId={ticket.id} username={ticket.userId} ticketTitle={ticket.title} ticketTag={ticket.tag[0]} />
            ))}
          </KanbanBoardColumn>
          <KanbanBoardColumn {...priorityConfigArray[1]}>
            {categorizedPriorityArray[1].map((ticket, index) => (
              <TicketCard key={index} ticketId={ticket.id} username={ticket.userId} ticketTitle={ticket.title} ticketTag={ticket.tag[0]} />
            ))}
          </KanbanBoardColumn>
          <KanbanBoardColumn {...priorityConfigArray[2]}>
            {categorizedPriorityArray[2].map((ticket, index) => (
              <TicketCard key={index} ticketId={ticket.id} username={ticket.userId} ticketTitle={ticket.title} ticketTag={ticket.tag[0]} />
            ))}
          </KanbanBoardColumn>
          <KanbanBoardColumn {...priorityConfigArray[3]}>
            {categorizedPriorityArray[3].map((ticket, index) => (
              <TicketCard key={index} ticketId={ticket.id} username={ticket.userId} ticketTitle={ticket.title} ticketTag={ticket.tag[0]} />
            ))}
          </KanbanBoardColumn>
          <KanbanBoardColumn {...priorityConfigArray[4]}>
            {categorizedPriorityArray[4].map((ticket, index) => (
              <TicketCard key={index} ticketId={ticket.id} username={ticket.userId} ticketTitle={ticket.title} ticketTag={ticket.tag[0]} />
            ))}
          </KanbanBoardColumn>
        </>
      )}
    </div>
  );
};
