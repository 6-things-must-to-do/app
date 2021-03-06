import {UserState} from '@stmt/redux-store';
import {RESET, SET_DATA, userReset, userSetData} from './actions';

const initialState: UserState = {};

type UserAction = ReturnType<typeof userSetData | typeof userReset>;
export default function reducer(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case SET_DATA: {
      return action.payload;
    }

    case RESET: {
      return initialState;
    }

    default:
      return state;
  }
}
