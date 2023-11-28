import React, { useState, useEffect } from 'react';
import { Header } from '../../components';
import { KanbanBoardLayout } from '../KanbanBoardLayout';
import styles from './DashboardLayout.module.css';
import { categorizeTickets, organizeTicketsByPriority } from '../../util/categorizeTickets';

export const DashboardLayout = ({ jsonData }) => {

  const categorizedTickets = categorizeTickets(jsonData, [], 'priority');
  console.log('categorizedTickets: ', categorizedTickets);

  const result = organizeTicketsByPriority(jsonData, 'priority');

  console.log(result);
  const result1 = organizeTicketsByPriority(jsonData);

  console.log(result1);

  // States
  const [currentGrouping, setCurrentGrouping] = useState('status');
  const [currentOrdering, setCurrentOrdering] = useState('priority');

  const [categorizedStatusArray, setCategorizedStatusArray] = useState(categorizeTickets(jsonData, [], currentOrdering) || []);
  const [categorizedPriorityArray, setCategorizedPriorityArray] = useState(organizeTicketsByPriority(jsonData, currentOrdering));

  // Effects
  useEffect(() => {
    if (currentGrouping === 'status') {
      setCategorizedStatusArray(categorizeTickets(jsonData, [], currentOrdering) || []);
    } else if (currentGrouping === 'priority') {
      setCategorizedPriorityArray(organizeTicketsByPriority(jsonData, currentOrdering));
    }
  }, [currentGrouping, currentOrdering]);

  return (
    <div className={styles.dashboardLayoutContainer}>
      <Header
        currentGrouping={currentGrouping}
        currentOrdering={currentOrdering}
        updateGrouping={setCurrentGrouping}
        updateOrdering={setCurrentOrdering}
      />
      <KanbanBoardLayout
        currentGrouping={currentGrouping}
        currentOrdering={currentOrdering}
        categorizedStatusArray={categorizedStatusArray || []}
        categorizedPriorityArray={categorizedPriorityArray || []}
      />
    </div>
  );
};
