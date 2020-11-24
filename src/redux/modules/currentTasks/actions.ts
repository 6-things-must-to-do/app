import {Data} from '@stmt/application';
import {RecordState} from '@stmt/redux-store';

export const SET_DATA = 'CURTASKS/SET_DATA' as const;
export const ALIGN_TASKS = 'CURTASKS/ALIGN_TASKS' as const;
export const ADD_TASK = 'CURTASKS/ADD_TASK' as const;
export const UPDATE_TASK = 'CURTASKS/UPDATE_TASK' as const;
export const CLICK_TASK_CHECKBOX = 'CURTASKS/CLICK_TASK_CHECKBOX' as const;
export const UPDATE_TODO = 'CURTASKS/UPDATE_TODO' as const;

export const tasksSetData = (data: RecordState) => ({
  type: SET_DATA,
  payload: data
});

export const tasksUpdateTask = (task: Data.Task) => ({
  type: UPDATE_TASK,
  payload: task
});

export const tasksClickTaskCheckbox = (priority: number) => ({
  type: CLICK_TASK_CHECKBOX,
  payload: priority
});

export const tasksUpdateTodo = (
  todo: Data.Todo,
  index: number,
  taskIndex: number
) => ({
  type: UPDATE_TODO,
  payload: {todo, index, taskIndex}
});

export const tasksTaskAlign = (from: number, to: number) => ({
  type: ALIGN_TASKS,
  payload: {from, to}
});

export const tasksAddTask = (task: Data.Task) => ({
  type: ADD_TASK,
  payload: task
});
