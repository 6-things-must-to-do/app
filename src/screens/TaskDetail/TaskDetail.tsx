import {MainStackParam} from '@/navigations/MainStack';
import {StackProps} from '@stmt/navigation';
import {Data} from '@stmt/application';
import React from 'react';
import {useForm} from 'react-hook-form';
import Presenter from './Presenter';
import CurrentTaskDetailProvider from '@/contexts/CurrentTaskDetail';
import {useDispatch, useSelector} from 'react-redux';
import {RecordState, RootStore} from '@stmt/redux-store';
import {recordAddTask, recordUpdateTask} from '@/redux/modules/record/actions';

const TaskDetail = (props: StackProps<MainStackParam, 'TaskDetail'>) => {
  const {route, navigation} = props;
  const {priority, isNew} = route.params;

  const {tasks} = useSelector<RootStore, RecordState>((store) => store.record);
  const dispatch = useDispatch();

  let task: Data.Task = isNew
    ? {
        createdAt: Date.now(),
        title: '',
        todos: [],
        priority,
        completedAt: null,
        estimatedMinutes: null,
        willStartAt: null
      }
    : tasks[priority];

  const {control, handleSubmit} = useForm<Data.Task>({defaultValues: task});

  const onClickAddTask = handleSubmit((form) => {
    const actionCreator = isNew ? recordAddTask : recordUpdateTask;
    dispatch(actionCreator({...form, priority}));
    navigation.goBack();
  });

  const buttonText = isNew ? 'Add Task' : 'Update Task';

  return (
    <CurrentTaskDetailProvider isNew={isNew} control={control} task={task}>
      <Presenter buttonText={buttonText} onClickAddTask={onClickAddTask} />
    </CurrentTaskDetailProvider>
  );
};

export default TaskDetail;
