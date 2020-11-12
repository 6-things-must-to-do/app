import {MainStackParam} from '@/navigations/MainStack';
import {StackProps} from '@stmt/navigation';
import React from 'react';
import Presenter from './Presenter';
import {Data} from '@stmt/application';

const TaskDetail = (props: StackProps<MainStackParam, 'TaskDetail'>) => {
  const {} = props;

  const onClickAddTask = () => {};

  const demo: Data.Task = {
    index: 0,
    todos: [{isCompleted: false, content: 'Test my application'}],
    createdAt: Date.now()
  };

  return <Presenter onClickAddTask={onClickAddTask} task={demo} />;
};

export default TaskDetail;
