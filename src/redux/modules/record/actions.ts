import {Data} from '@stmt/application';
import {RecordState} from '@stmt/redux-store';

export const SET_DATA = 'RECORD/SET_DATA' as const;
export const ALIGN_TASKS = 'RECORD/ALIGN_TASKS' as const;
export const ADD_TASK = 'RECORD/ADD_TASK' as const;
export const UPDATE_TASK = 'RECORD/UPDATE_TASK' as const;
export const CLICK_TASK_CHECKBOX = 'RECORD/CLICK_TASK_CHECKBOX' as const;

export const recordSetData = (data: RecordState) => ({
  type: SET_DATA,
  payload: data
});

export const recordUpdateTask = (task: Data.Task) => ({
  type: UPDATE_TASK,
  payload: task
});

export const recordClickTaskCheckbox = (priority: number) => ({
  type: CLICK_TASK_CHECKBOX,
  payload: priority
});

export const recordTaskAlign = (from: number, to: number) => ({
  type: ALIGN_TASKS,
  payload: {from, to}
});

export const recordAddTask = (task: Data.Task) => ({
  type: ADD_TASK,
  payload: task
});
