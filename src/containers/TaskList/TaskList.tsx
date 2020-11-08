import Task from '@/components/Task';
import {Data} from '@stmt/application';
import React from 'react';
import Animated from 'react-native-reanimated';
import Presenter from './Presenter';

const TaskList = () => {
  const data: Array<Data.Task> = [
    {index: 1, createdAt: Date.now(), todos: []},
    {index: 0, createdAt: Date.now(), todos: []}
  ];

  const keyExtractor = (item: Data.Task, _index: number) => `${item.index}`;

  return (
    <Presenter
      data={data}
      renderItem={Task}
      keyExtractor={keyExtractor}
      dragItemOverflow={false}
      animationConfig={{} as Animated.SpringConfig}
    />
  );
};

export default TaskList;
