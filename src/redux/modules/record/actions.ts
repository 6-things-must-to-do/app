import {RecordState} from '@stmt/redux-store';

export const SET_DATA = 'RECORD/SET_DATA' as const;

export const recordSetData = (data: RecordState) => ({
  type: SET_DATA,
  payload: data
});
