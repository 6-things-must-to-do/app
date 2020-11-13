import React from 'react';
import Presenter from './Presenter';

const Dashboard = () => {
  const data = [
    {x: 8, y: 0.4},
    {x: 9, y: 0.6},
    {x: 10, y: 1},
    {x: 11, y: 1},
    {x: 12, y: 0.8},
    {x: 13, y: 0},
    {x: 14, y: 0},
    {x: 15, y: 0},
    {x: 16, y: 0}
  ];

  return <Presenter data={data} />;
};

export default Dashboard;
