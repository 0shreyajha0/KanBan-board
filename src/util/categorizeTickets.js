// Utility function to sort an array of objects based on a property
const sortBy = (array, property, order = 'asc') => {
  return array.sort((a, b) => {
    const aValue = a[property];
    const bValue = b[property];

    if (order === 'desc') {
      return bValue > aValue ? 1 : -1;
    } else {
      return aValue > bValue ? 1 : -1;
    }
  });
};

// Modified categorizeTickets function with sorting options
export const categorizeTickets = (ticketsData, statusFilters = [], sortByOption = null, sortOrder = 'asc') => {
  // Extract tickets array from the input data
  const { tickets } = ticketsData;

  // Initialize the result object with empty arrays for each status
  const result = {
    Backlog: [],
    Todo: [],
    InProgress: [],
    Done: [],
    Canceled: []
  };

  tickets.forEach((ticket) => {
    // Apply status filters
    if (statusFilters.length === 0 || statusFilters.includes(ticket.status.toLowerCase())) {
        switch (ticket.status.toLowerCase()) {
        case 'backlog':
          result.Backlog.push(ticket);
          break;
        case 'todo':
          result.Todo.push(ticket);
          break;
        case 'in progress':
          result.InProgress.push(ticket);
          break;
        case 'done':
          result.Done.push(ticket);
          break;
        case 'canceled':
          result.Canceled.push(ticket);
          break;
        default:
          break;
      }
    }
  });

  // Sort tickets based on the provided options
  if (sortByOption) {
    result.Backlog = sortBy(result.Backlog, sortByOption, sortOrder);
    result.Todo = sortBy(result.Todo, sortByOption, sortOrder);
    result.InProgress = sortBy(result.InProgress, sortByOption, sortOrder);
    result.Done = sortBy(result.Done, sortByOption, sortOrder);
    result.Canceled = sortBy(result.Canceled, sortByOption, sortOrder);
  }

  return result;
};

// Modified organizeTicketsByPriority function with sorting options
export const organizeTicketsByPriority = (data, sortByOption = null, sortOrder = 'asc') => {
  const priorityLevels = [4, 3, 2, 1, 0];
  // Extract tickets array from the data
  const tickets = data.tickets || [];

  // Initialize arrays for each priority level
  const organizedTickets = {};
  priorityLevels.forEach((priority) => {
    organizedTickets[priority] = [];
  });

  // Organize tickets based on priority level
  tickets.forEach((ticket) => {
    const ticketPriority = ticket.priority || 0;
    const priorityLabel = priorityLevels.includes(ticketPriority) ? ticketPriority : 'No priority';

    if (organizedTickets[priorityLabel]) {
      organizedTickets[priorityLabel].push(ticket);
    }
  });

  // Sort tickets based on the provided options
  if (sortByOption) {
    for (const priorityLabel in organizedTickets) {
      organizedTickets[priorityLabel] = sortBy(organizedTickets[priorityLabel], sortByOption, sortOrder);
    }
  }

  return organizedTickets;
};
