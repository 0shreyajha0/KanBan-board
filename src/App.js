import React, { useState, useEffect } from 'react';
import { DashboardLayout } from './layouts/DashboardLayout';
import { FullPageLoader } from './components/FullPageLoader/FullPageLoader.component';
import './styles/styles.css';

const App = () => {
  //   Fetch Data
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return data !== null ? <DashboardLayout jsonData={data} /> : <FullPageLoader />;
};

export default App;
