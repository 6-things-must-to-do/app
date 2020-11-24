import {MainStackParam} from '@/navigations/MainStack';
import {tasksClickTaskCheckbox} from '@/redux/modules/currentTasks/actions';
import {detailSetData} from '@/redux/modules/taskDetail/actions';
import {TaskList} from '@stmt/application';
import {StackProps} from '@stmt/navigation';
import {CurrentTasksState, RootStore} from '@stmt/redux-store';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Presenter from './Presenter';

const Main = (props: StackProps<MainStackParam, 'Main'>) => {
  const {navigation} = props;
  const {tasks, lockTime} = useSelector<RootStore, CurrentTasksState>(
    (store) => store.currentTasks
  );

  const dispatch = useDispatch();

  const onClick = (priority: number) => () => {
    dispatch(
      detailSetData({
        detail: tasks[priority],
        isRecord: false,
        isNew: false,
        isLocked: Boolean(lockTime)
      })
    );
    navigation.navigate('TaskDetail');
  };

  const onClickComplete = (priority: number) => () => {
    dispatch(tasksClickTaskCheckbox(priority));
  };

  const makeList = () => {
    const data: Array<TaskList.Task> = tasks.map<TaskList.Task>((task) => ({
      ...task,
      onClick: onClick(task.priority),
      onClickComplete: onClickComplete(task.priority)
    }));
    return data;
  };

  const list = makeList();

  return <Presenter isLocked={Boolean(lockTime)} taskList={list} />;
};

export default Main;
