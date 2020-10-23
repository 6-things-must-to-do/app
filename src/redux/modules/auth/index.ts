import {AuthState} from '@stmt/redux-store';
import {authSetPartialData, SET_PARTIAL} from './actions';
import * as R from 'ramda';

const initialState: AuthState = {};

export type AuthAction = ReturnType<typeof authSetPartialData>;

export default function reducer(
  state: AuthState = initialState,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case SET_PARTIAL: {
      return R.mergeDeepRight(state, action.payload);
    }

    default:
      return state;
  }
}

export {default as authSaga} from './saga';
