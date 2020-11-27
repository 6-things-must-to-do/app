import {MainStackParam} from '@/navigations/MainStack';
import {
  tasksCompleteTask,
  tasksFetchCurrent
} from '@/redux/modules/currentTasks/actions';
import {detailSetData} from '@/redux/modules/taskDetail/actions';
import {TaskList} from '@stmt/application';
import {StackProps} from '@stmt/navigation';
import {CurrentTasksState, RootStore} from '@stmt/redux-store';
import React, {useEffect} from 'react';
import {GestureResponderEvent} from 'react-native';
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

  const onClickComplete = (priority: number) => (e: GestureResponderEvent) => {
    if (!lockTime || tasks[priority].completedAt) {
      e.preventDefault();
      return;
    }

    dispatch(tasksCompleteTask(priority));
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

  useEffect(() => {
    if (!tasks.length) {
      dispatch(tasksFetchCurrent());
    }
    console.log('rerender');
  }, [tasks, dispatch]);

  return <Presenter isLocked={Boolean(lockTime)} taskList={list} />;
};

export default Main;
