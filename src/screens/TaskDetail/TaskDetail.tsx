import {MainStackParam} from '@/navigations/MainStack';
import {StackProps} from '@stmt/navigation';
import {Data} from '@stmt/application';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Presenter from './Presenter';
import CurrentTaskDetailProvider from '@/contexts/CurrentTaskDetail';
import {useSelector} from 'react-redux';
import {RecordState, RootStore} from '@stmt/redux-store';

const TaskDetail = (props: StackProps<MainStackParam, 'TaskDetail'>) => {
  const {control, handleSubmit} = useForm<Data.Task>();
  const {route} = props;

  const {index} = route.params;

  const {tasks} = useSelector<RootStore, RecordState>((store) => store.record);

  let data: Data.Task = tasks[index]
    ? tasks[index]
    : {createdAt: Date.now(), title: '', todos: [], index};

  const [task, setTask] = useState(data);

  const onClickAddTask = handleSubmit((data) => {
    setTask({...data, todos: []});
  });

  return (
    <CurrentTaskDetailProvider control={control} task={task}>
      <Presenter onClickAddTask={onClickAddTask} task={task} />
    </CurrentTaskDetailProvider>
  );
};

export default TaskDetail;
