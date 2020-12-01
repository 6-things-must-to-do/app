import * as R from 'ramda';
import {SocialState} from '@stmt/redux-store';
import {
  PUSH_FOLLOWING,
  SET_DATA,
  socialPushFollowing,
  socialSetData
} from './actions';
import {getYesterdayTimestamp} from '@/utils/date';

const initialState: SocialState = {
  follower: [],
  following: [],
  ranking: [],
  type: 'all',
  date: getYesterdayTimestamp()
};

type SocialAction = ReturnType<
  typeof socialSetData | typeof socialPushFollowing
>;

export default function reducer(
  state: SocialState = initialState,
  action: SocialAction
): SocialState {
  switch (action.type) {
    case SET_DATA: {
      return R.mergeRight(state, action.payload);
    }

    case PUSH_FOLLOWING: {
      const {payload} = action;
      const cState = R.clone(state);
      cState.following.push(payload);
      return cState;
    }

    default:
      return state;
  }
}
