import {MainStackParam} from '@/navigations/MainStack';
import {StackProps} from '@stmt/navigation';
import {Data} from '@stmt/application';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Presenter from './Presenter';
import CurrentTaskDetailProvider from '@/contexts/CurrentTaskDetail';
import {useDispatch, useSelector} from 'react-redux';
import {RecordState, RootStore} from '@stmt/redux-store';
import {recordAddTask, recordUpdateTask} from '@/redux/modules/record/actions';

const TaskDetail = (props: StackProps<MainStackParam, 'TaskDetail'>) => {
  const {route, navigation} = props;

  const {index, isNew} = route.params;

  const {tasks} = useSelector<RootStore, RecordState>((store) => store.record);
  const dispatch = useDispatch();

  let data: Data.Task = isNew
    ? {
        createdAt: Date.now(),
        title: '',
        todos: [],
        index,
        completedAt: null,
        estimatedMinutes: null,
        willStartAt: null
      }
    : tasks[index];

  console.log(data);

  const {control, handleSubmit} = useForm<Data.Task>({defaultValues: data});

  const [task, setTask] = useState(data);

  const onClickAddTask = handleSubmit((form) => {
    const actionCreator = isNew ? recordAddTask : recordUpdateTask;

    dispatch(actionCreator(form));
    navigation.goBack();
  });

  const buttonText = isNew ? 'Add Task' : 'Update Task';

  return (
    <CurrentTaskDetailProvider
      isNew={isNew}
      control={control}
      task={task}
      setTask={setTask}>
      <Presenter buttonText={buttonText} onClickAddTask={onClickAddTask} />
    </CurrentTaskDetailProvider>
  );
};

export default TaskDetail;
