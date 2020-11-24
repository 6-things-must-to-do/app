import * as R from 'ramda';
import {TaskDetailState} from '@stmt/redux-store';
import {detailSetData, SET_DATA} from './actions';

const initialState: TaskDetailState = {
  isRecord: false,
  isLocked: false,
  isNew: false
};

export type TaskDetailAction = ReturnType<typeof detailSetData>;

export default function reducer(
  state = initialState,
  action: TaskDetailAction
): TaskDetailState {
  switch (action.type) {
    case SET_DATA: {
      return R.mergeRight(state, action.payload);
    }

    default:
      return state;
  }
}
