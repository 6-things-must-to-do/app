import {AppSettingState} from '@stmt/redux-store';
import {
  appSetLockHours,
  appSetReset,
  appSetSetData,
  RESET,
  SET_DATA,
  SET_LOCK_HOUR
} from './actions';
import * as R from 'ramda';

const initialState: AppSettingState = {
  lock: 8
};

export type AppSettingAction = ReturnType<
  typeof appSetReset | typeof appSetSetData | typeof appSetLockHours
>;

export default function reducer(
  state: AppSettingState = initialState,
  action: AppSettingAction
): AppSettingState {
  switch (action.type) {
    case RESET: {
      return initialState;
    }

    case SET_LOCK_HOUR: {
      return R.mergeDeepRight(state, {lock: action.payload});
    }

    case SET_DATA: {
      return R.mergeDeepRight(state, action.payload);
    }

    default:
      return state;
  }
}
