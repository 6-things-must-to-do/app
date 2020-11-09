import * as R from 'ramda';
import {RecordState} from '@stmt/redux-store';
import {recordSetData, SET_DATA} from './actions';

const initialState: RecordState = {
  tasks: []
};

export type RecordAction = ReturnType<typeof recordSetData>;

export default function reducer(
  state = initialState,
  action: RecordAction
): RecordState {
  switch (action.type) {
    case SET_DATA: {
      return R.mergeRight(state, action.payload);
    }

    default:
      return state;
  }
}
