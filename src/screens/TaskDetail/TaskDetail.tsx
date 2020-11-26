import {MainStackParam} from '@/navigations/MainStack';
import {StackProps} from '@stmt/navigation';
import {Data} from '@stmt/application';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {BulletList} from 'react-content-loader';
import Presenter from './Presenter';
import CurrentTaskDetailProvider from '@/contexts/CurrentTaskDetail';
import {useDispatch, useSelector} from 'react-redux';
import {RootStore, TaskDetailState} from '@stmt/redux-store';
import {
  tasksAddTask,
  tasksDeleteTask,
  tasksUpdateTask
} from '@/redux/modules/currentTasks/actions';

const TaskDetail = (props: StackProps<MainStackParam, 'TaskDetail'>) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {detail, isNew, isRecord, isLocked} = useSelector<
    RootStore,
    TaskDetailState
  >((store) => store.taskDetail);
  const {control, handleSubmit} = useForm<Data.Task>({defaultValues: detail});
  const [isModalVisible, setVisible] = useState(false);

  if (!detail) {
    return <BulletList />;
  }

  const onClickAddTask = handleSubmit((form) => {
    const actionCreator = isNew ? tasksAddTask : tasksUpdateTask;
    dispatch(actionCreator({...form, priority: detail.priority}));
    navigation.goBack();
  });

  const onClickRemove = () => {
    dispatch(tasksDeleteTask(detail.priority));
    setVisible(true);
    navigation.goBack();
  };
  const removeModalSwitch = () => {
    setVisible(!isModalVisible);
  };

  const buttonText = isNew ? 'Add Task' : 'Update Task';
  const useRemove = !isNew && !isLocked;

  return (
    <CurrentTaskDetailProvider isNew={isNew} control={control} task={detail}>
      <Presenter
        useButton={!isRecord}
        useRemoveButton={useRemove}
        buttonText={buttonText}
        onClickAddTask={onClickAddTask}
        onClickRemove={onClickRemove}
        isModalVisible={isModalVisible}
        removeModalSwitch={removeModalSwitch}
      />
    </CurrentTaskDetailProvider>
  );
};

export default TaskDetail;
