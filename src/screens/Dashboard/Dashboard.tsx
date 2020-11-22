import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Presenter from './Presenter';
import {
  dashboardCurrentDate,
  dashboardFetchList
} from '@/redux/modules/dashboard/actions';
import {DashboardState, RootStore} from '@stmt/redux-store';

const Dashboard = () => {
  const {progress} = useSelector<RootStore, DashboardState>(
    (store) => store.dashboard
  );

  const {date} = useSelector<RootStore, DashboardState>(
    (store) => store.dashboard
  );

  const dispatch = useDispatch();
  const onPressDate = (newdate: number) => {
    console.log(newdate);
    try {
      dispatch(dashboardCurrentDate(newdate));
      dispatch(dashboardFetchList(newdate));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Presenter data={progress} currentDate={date} onPressDate={onPressDate} />
  );
};

export default Dashboard;
