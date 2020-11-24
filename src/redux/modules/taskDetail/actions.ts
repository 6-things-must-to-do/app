import {TaskDetailState} from '@stmt/redux-store';

export const SET_DATA = 'TASKDETAIL/SET_DATA' as const;

export const detailSetData = (state: TaskDetailState) => ({
  type: SET_DATA,
  payload: state
});
