import {GlobalState} from '@stmt/redux-store';
import * as R from 'ramda';
import {
  globalResetError,
  globalSetError,
  RESET_ERROR,
  SET_ERROR
} from './actions';

const initialState: GlobalState = {isLoading: false};

type ActionTypes = ReturnType<typeof globalSetError | typeof globalResetError>;

export default function reducer(
  state = initialState,
  action: ActionTypes
): GlobalState {
  switch (action.type) {
    case SET_ERROR: {
      return R.mergeDeepRight(state, {error: action.payload});
    }

    case RESET_ERROR: {
      return R.dissoc('error', state);
    }

    default:
      return state;
  }
}
