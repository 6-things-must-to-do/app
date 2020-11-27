import {Data} from '@stmt/application';
import {CurrentTasksState} from '@stmt/redux-store';

export const SET_DATA = 'CURTASKS/SET_DATA' as const;
export const ALIGN_TASKS = 'CURTASKS/ALIGN_TASKS' as const;
export const ADD_TASK = 'CURTASKS/ADD_TASK' as const;
export const FETCH_CURRENT = 'CURTASKS/FETCH_CUR' as const;
export const UPDATE_TASK = 'CURTASKS/UPDATE_TASK' as const;
export const DELETE_TASK = 'CURTASKS/DELETE_TASK' as const;
export const COMPLETE_TASK_UPDATE = 'CURTASKS/COMPLETE_TASK_UPDATE' as const;
export const COMPLETE_TASK = 'CURTASKS/COMAPLETE_TASK' as const;
export const UPDATE_TODO = 'CURTASKS/UPDATE_TODO' as const;
export const LOCK = 'CURTASKS/LOCK' as const;

export const tasksLock = () => ({
  type: LOCK
});

export const tasksFetchCurrent = () => ({
  type: FETCH_CURRENT
});

export const tasksSetData = (data: Partial<CurrentTasksState>) => ({
  type: SET_DATA,
  payload: data
});

export const tasksUpdateTask = (task: Data.Task) => ({
  type: UPDATE_TASK,
  payload: task
});

export const tasksDeleteTask = (priority: number) => ({
  type: DELETE_TASK,
  payload: priority
});

export const tasksCompleteTask = (priority: number) => ({
  type: COMPLETE_TASK,
  payload: priority
});

export const tasksCompleteUpdate = (priority: number, completedAt: number) => ({
  type: COMPLETE_TASK_UPDATE,
  payload: {priority, completedAt}
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
