import {Data} from '@stmt/application';
import React from 'react';
import Presenter from './Presenter';

interface Props {
  todos: Array<Data.Todo>;
}

const TodoList = (props: Props) => {
  const {todos} = props;

  const onToggleTodo = (index: number) => () => {
    console.log(index);
  };

  return <Presenter todos={todos} onToggleTodo={onToggleTodo} />;
};

export default TodoList;
