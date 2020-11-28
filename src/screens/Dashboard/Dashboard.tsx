import React from 'react';
import Presenter from './Presenter';

const Dashboard = () => {
  const date = new Date().getDate();
  return <Presenter currentDate={date} />;
};

export default Dashboard;
