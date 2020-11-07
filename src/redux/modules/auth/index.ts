import {AuthState} from '@stmt/redux-store';
import {authReset, authSetPartialData, RESET, SET_PARTIAL} from './actions';
import * as R from 'ramda';

const initialState: AuthState = {};

export type AuthAction = ReturnType<
  typeof authSetPartialData | typeof authReset
>;

export default function reducer(
  state: AuthState = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case SET_PARTIAL: {
      return R.mergeDeepRight(state, action.payload);
    }

    case RESET: {
      return initialState;
    }

    default:
      return state;
  }
}

export {default as authSaga} from './saga';
