import {MainStackParam} from '@/navigations/MainStack';
import {StackProps} from '@stmt/navigation';
import {Data} from '@stmt/application';
import React from 'react';
import {useForm} from 'react-hook-form';
import {BulletList} from 'react-content-loader';
import Presenter from './Presenter';
import CurrentTaskDetailProvider from '@/contexts/CurrentTaskDetail';
import {useDispatch, useSelector} from 'react-redux';
import {RootStore, TaskDetailState} from '@stmt/redux-store';
import {
  tasksAddTask,
  tasksUpdateTask
} from '@/redux/modules/currentTasks/actions';

const TaskDetail = (props: StackProps<MainStackParam, 'TaskDetail'>) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {detail, isNew, isRecord} = useSelector<RootStore, TaskDetailState>(
    (store) => store.taskDetail
  );
  const {control, handleSubmit} = useForm<Data.Task>({defaultValues: detail});

  if (!detail) {
    return <BulletList />;
  }

  const onClickAddTask = handleSubmit((form) => {
    const actionCreator = isNew ? tasksAddTask : tasksUpdateTask;
    dispatch(actionCreator({...form, priority: detail.priority}));
    navigation.goBack();
  });

  const buttonText = isNew ? 'Add Task' : 'Update Task';

  return (
    <CurrentTaskDetailProvider isNew={isNew} control={control} task={detail}>
      <Presenter
        useButton={!isRecord}
        buttonText={buttonText}
        onClickAddTask={onClickAddTask}
      />
    </CurrentTaskDetailProvider>
  );
};

export default TaskDetail;
