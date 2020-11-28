import useCurrentTask from '@/hooks/useCurrentTask';
import {
  tasksUpdateLockedTodo,
  tasksUpdateTodo
} from '@/redux/modules/currentTasks/actions';
import {Data} from '@stmt/application';
import React, {useEffect, useState} from 'react';
import {Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import Presenter from './Presenter';

const TodoList = () => {
  const {control, task, isNew, isLocked} = useCurrentTask();
  const {todos} = task;

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [content, setContent] = useState('');
  const [todoList, setTodoList] = useState<Array<Data.Todo>>(todos);
  const dispatch = useDispatch();

  const onToggleTodo = (index: number) => (isChecked: boolean) => {
    const targetTodo = todoList[index];
    targetTodo.isCompleted = isChecked;
    setTodoList([...todoList]);

    if (isNew) return;

    // TODO REDUX LOGIC (TODO Check 하는 거는 업데이트 누르지 않더라도 반영되게 하려고)
    if (isLocked) {
      dispatch(tasksUpdateLockedTodo(task.priority, todoList));
      return;
    }

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
    try {
      if (!content) throw new Error();
      const todo: Data.Todo = {content, isCompleted: false};
      const nextTodoList = [...todoList, todo];
      if (isNew) {
        change(nextTodoList);
        setTodoList(nextTodoList);
        return;
      }

      if (isLocked) {
        dispatch(tasksUpdateLockedTodo(task.priority, nextTodoList));
        return;
      }
      setContent('');
    } catch {
    } finally {
      setIsCollapsed(!isCollapsed);
    }
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
