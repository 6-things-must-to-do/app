import {MainStackParam} from '@/navigations/MainStack';
import {tasksLock} from '@/redux/modules/currentTasks/actions';
import {getToday} from '@/utils/date';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CurrentTasksState, RootStore} from '@stmt/redux-store';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Presenter from './Presenter';

const TasksToolbar = () => {
  const {navigate} = useNavigation<StackNavigationProp<MainStackParam>>();
  const {lockTime} = useSelector<RootStore, CurrentTasksState>(
    (store) => store.currentTasks
  );
  const dispatch = useDispatch();

  const isLocked = Boolean(lockTime);
  const day = getToday();

  const onPressLock = () => {
    if (!isLocked) dispatch(tasksLock());
  };

  const onPressDashboard = () => {
    navigate('Dashboard');
  };

  return (
    <Presenter
      day={day}
      isLocked={isLocked}
      onPressDashboard={onPressDashboard}
      onPressLock={onPressLock}
    />
  );
};

export default TasksToolbar;
