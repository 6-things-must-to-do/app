import {RecordState} from '@stmt/redux-store';

export const SET_DATA = 'RECORD/SET_DATA' as const;
export const ALIGN_TASKS = 'RECORD/ALIGN_TASKS' as const;

export const recordSetData = (data: RecordState) => ({
  type: SET_DATA,
  payload: data
});

export const recordTaskAlign = (from: number, to: number) => ({
  type: ALIGN_TASKS,
  payload: {from, to}
});
