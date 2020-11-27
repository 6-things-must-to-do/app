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
  const {lockTime, tasks} = useSelector<RootStore, CurrentTasksState>(
    (store) => store.currentTasks
  );
  const dispatch = useDispatch();

  const len = tasks.length;
  const isLocked = Boolean(lockTime);
  const lockable = !isLocked && len > 0;
  const day = getToday();

  const onPressLock = () => {
    if (lockable) {
      dispatch(tasksLock());
    }
  };

  const onPressDashboard = () => {
    navigate('Dashboard');
  };

  return (
    <Presenter
      day={day}
      isLocked={isLocked}
      lockable={lockable}
      onPressDashboard={onPressDashboard}
      onPressLock={onPressLock}
    />
  );
};

export default TasksToolbar;
