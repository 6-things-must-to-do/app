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
  const current = useSelector<RootStore, CurrentTasksState>(
    (store) => store.currentTasks
  );
  const {tasks} = current;
  const dispatch = useDispatch();

  const len = tasks.length;
  const isLocked = 'lockTime' in current;
  const lockable = !isLocked && len > 0;
  const day = getToday();

  const getPercent = () => {
    if (!len) return 0;
    const completeCount = tasks.filter((task) => Boolean(task.completedAt))
      .length;
    return completeCount / len;
  };

  const percent = getPercent();

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
      percent={percent}
      isLocked={isLocked}
      lockable={lockable}
      onPressDashboard={onPressDashboard}
      onPressLock={onPressLock}
    />
  );
};

export default TasksToolbar;
