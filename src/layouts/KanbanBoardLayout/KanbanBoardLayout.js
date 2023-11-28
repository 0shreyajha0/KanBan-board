import React from 'react';
import styles from './KanbanBoardLayout.module.css';
import { FaPlus } from 'react-icons/fa6';
import { TicketCard, KanbanBoardColumn } from '../../components';

export const KanbanBoardLayout = (props) => {
  const { categorizedStatusArray = [], categorizedPriorityArray = [], currentGrouping } = props;
  const statusConfigArray = [
    {
      statusIcon: FaPlus,
      statusName: 'Backlog',
      isAvatar: false,
      ticketCount: categorizedStatusArray?.Backlog.length
    },
    {
      statusIcon: FaPlus,
      statusName: 'Todo',
      isAvatar: false,
      ticketCount: categorizedStatusArray?.Todo.length
    },
    {
      statusIcon: FaPlus,
      statusName: 'In Progress',
      isAvatar: false,
      ticketCount: categorizedStatusArray?.InProgress.length
    },
    {
      statusIcon: FaPlus,
      statusName: 'Done',
      isAvatar: false,
      ticketCount: categorizedStatusArray?.Done.length
    },
    {
      statusIcon: FaPlus,
      statusName: 'Canceled',
      isAvatar: false,
      ticketCount: categorizedStatusArray?.Canceled.length
    }
  ];

  const priorityConfigArray = [
    {
      statusIcon: FaPlus,
      statusName: 'No priority',
      isAvatar: false,
      ticketCount: categorizedPriorityArray[0].length
    },
    {
      statusIcon: FaPlus,
      statusName: 'Urgent',
      isAvatar: false,
      ticketCount: categorizedPriorityArray[1].length
    },
    {
      statusIcon: FaPlus,
      statusName: 'High',
      isAvatar: false,
      ticketCount: categorizedPriorityArray[2].length
    },
    {
      statusIcon: FaPlus,
      statusName: 'Medium',
      isAvatar: false,
      ticketCount: categorizedPriorityArray[3].length
    },
    {
      statusIcon: FaPlus,
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
