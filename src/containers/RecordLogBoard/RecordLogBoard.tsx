import {DashboardState, RootStore} from '@stmt/redux-store';
import React from 'react';
import {useSelector} from 'react-redux';
import Presenter from './Presenter';

const RecordLogBoard = () => {
  const {progressList} = useSelector<RootStore, DashboardState>(
    (store) => store.dashboard
  );

  const onPressDate = (date: number) => {
    console.log(date);
  };

  return <Presenter progressList={progressList} onPressDate={onPressDate} />;
};

export default RecordLogBoard;
