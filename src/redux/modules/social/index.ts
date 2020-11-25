import * as R from 'ramda';
import {SocialState} from '@stmt/redux-store';
import {SET_DATA, socialSetData} from './actions';
import {getYesterdayTimestamp} from '@/utils/date';

const initialState: SocialState = {
  ranking: [],
  type: 'all',
  date: getYesterdayTimestamp()
};

type SocialAction = ReturnType<typeof socialSetData>;

export default function reducer(
  state: SocialState = initialState,
  action: SocialAction
): SocialState {
  switch (action.type) {
    case SET_DATA: {
      return R.mergeRight(state, action.payload);
    }

    default:
      return state;
  }
}
