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

interface State {
  isCollapsed: boolean;
  content: string;
  todoList: Array<Data.Todo>;
}

const TodoList = () => {
  const {control, task, isNew, isLocked} = useCurrentTask();
  const {todos} = task;

  const initialState: State = {isCollapsed: true, content: '', todoList: todos};
  const [state, setState] = useState<State>(initialState);
  const dispatch = useDispatch();

  const onToggleTodo = (index: number) => (isChecked: boolean) => {
    const targetTodo = state.todoList[index];
    targetTodo.isCompleted = isChecked;
    setState({...state, todoList: state.todoList});

    if (isNew) return;

    // TODO REDUX LOGIC (TODO Check 하는 거는 업데이트 누르지 않더라도 반영되게 하려고)
    if (isLocked) {
      dispatch(tasksUpdateLockedTodo(task.priority, state.todoList));
      return;
    }

    dispatch(tasksUpdateTodo(targetTodo, index, task.priority));
  };

  const onPressAdd = () => {
    setState({...state, isCollapsed: false});
  };

  const onChangeContent = (text: string) => {
    setState({...state, content: text});
  };

  const onPressSave = (
    change: (todoList: Array<Data.Todo>) => void
  ) => (): void => {
    const {content, todoList} = state;
    const todo: Data.Todo = {content, isCompleted: false};
    const nextTodoList = [...todoList, todo];
    try {
      if (!content) throw new Error();

      if (isLocked) {
        dispatch(tasksUpdateLockedTodo(task.priority, nextTodoList));
      }
    } catch {
    } finally {
      change(nextTodoList);
      setState({...initialState, todoList: nextTodoList});
    }
  };

  useEffect(() => {}, [state, todos]);

  return (
    <Controller
      name="todos"
      defaultValue={[]}
      control={control}
      render={({onChange, value}) => (
        <Presenter
          contentValue={state.content}
          onChangeContent={onChangeContent}
          onPressSave={onPressSave(onChange)}
          onPressAdd={onPressAdd}
          isCollapsed={state.isCollapsed}
          todos={value}
          onToggleTodo={onToggleTodo}
        />
      )}
    />
  );
};

export default TodoList;
