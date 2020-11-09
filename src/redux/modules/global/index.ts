import {GlobalState} from '@stmt/redux-store';
import * as R from 'ramda';
import {RESET} from './actions';
import {
  globalReset,
  globalResetError,
  globalSetError,
  globalSetLoading,
  RESET_ERROR,
  SET_ERROR,
  SET_LOADING
} from './actions';

const initialState: GlobalState = {isLoading: false};

type GlobalAction = ReturnType<
  | typeof globalSetError
  | typeof globalResetError
  | typeof globalSetLoading
  | typeof globalReset
>;

export default function reducer(
  state = initialState,
  action: GlobalAction
): GlobalState {
  switch (action.type) {
    case SET_ERROR: {
      return R.mergeDeepRight(state, {error: action.payload});
    }

    case RESET_ERROR: {
      return R.dissoc('error', state);
    }

    case RESET: {
      return initialState;
    }

    case SET_LOADING: {
      return R.mergeDeepRight(state, {isLoading: action.payload});
    }

    default:
      return state;
  }
}
