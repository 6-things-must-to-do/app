import {Data} from '@stmt/application';
import {TaskDetailState} from '@stmt/redux-store';

export const SET_DATA = 'TASKDETAIL/SET_DATA' as const;
export const UPDATE_TODO = 'TASKDETAIL/UPDATETODO' as const;

export const detailSetData = (state: TaskDetailState) => ({
  type: SET_DATA,
  payload: state
});

export const detailUpdateTodo = (todos: Array<Data.Todo>) => ({
  type: UPDATE_TODO,
  payload: todos
});
