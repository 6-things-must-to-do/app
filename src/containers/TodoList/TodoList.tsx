import useCurrentTask from '@/hooks/useCurrentTask';
import {Data} from '@stmt/application';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import Presenter from './Presenter';

const TodoList = () => {
  const {control, task} = useCurrentTask();
  const {todos} = task;

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [content, setContent] = useState('');

  const onToggleTodo = (index: number) => () => {
    console.log(index);
  };

  const onPressAdd = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onChangeContent = (text: string) => {
    setContent(text);
  };

  const onPressSave = (
    change: (todoList: Array<Data.Todo>) => void
  ) => (): void => {
    if (content) {
      const todo: Data.Todo = {content, isCompleted: false};
      change([...todos, todo]);
      setContent('');
    }
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Controller
      name="todos"
      defaultValue={[]}
      control={control}
      render={({onChange, value}) => (
        <Presenter
          contentValue={content}
          onChangeContent={onChangeContent}
          onPressSave={onPressSave(onChange)}
          onPressAdd={onPressAdd}
          isCollapsed={isCollapsed}
          todos={value}
          onToggleTodo={onToggleTodo}
        />
      )}
    />
  );
};

export default TodoList;
