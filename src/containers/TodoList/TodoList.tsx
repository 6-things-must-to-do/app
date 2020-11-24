import useCurrentTask from '@/hooks/useCurrentTask';
import {tasksUpdateTodo} from '@/redux/modules/currentTasks/actions';
import {Data} from '@stmt/application';
import React, {useEffect, useState} from 'react';
import {Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import Presenter from './Presenter';

const TodoList = () => {
  const {control, task, isNew} = useCurrentTask();
  const {todos} = task;

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [content, setContent] = useState('');
  const [todoList, setTodoList] = useState<Array<Data.Todo>>(todos);
  const dispatch = useDispatch();

  const onToggleTodo = (index: number) => (isChecked: boolean) => {
    if (isNew) {
      todoList[index].isCompleted = isChecked;
      setTodoList([...todoList]);
      return;
    }

    const targetTodo = todoList[index];
    targetTodo.isCompleted = isChecked;

    // TODO REDUX LOGIC (TODO Check 하는 거는 업데이트 누르지 않더라도 반영되게 하려고)
    dispatch(tasksUpdateTodo(targetTodo, index, task.priority));
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
      const nextTodoList = [...todoList, todo];
      setTodoList(nextTodoList);
      change(nextTodoList);
      setContent('');
    }
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {}, [todoList, todos, setTodoList]);

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
