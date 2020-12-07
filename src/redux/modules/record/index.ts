import * as R from 'ramda';
import {RecordState} from '@stmt/redux-store';
import {
  FETCH_META_LIST_COMPLETE,
  recordFetchMetaListComplete,
  recordSelectMeta,
  recordSetData,
  SELECT_META,
  SET_DATA
} from './actions';

const initialState: RecordState = {
  history: {},
  metaList: [],
  tasks: []
};

export type RecordAction = ReturnType<
  | typeof recordSetData
  | typeof recordFetchMetaListComplete
  | typeof recordSelectMeta
>;

export default function reducer(
  state = initialState,
  action: RecordAction
): RecordState {
  switch (action.type) {
    case SET_DATA: {
      return R.mergeRight(state, action.payload);
    }

    case SELECT_META: {
      state.selectedMeta = action.payload;
      return state;
    }

    case FETCH_META_LIST_COMPLETE: {
      const cState = R.clone(state);
      const fullMonthDay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      const {year, month, day, list} = action.payload;
      const isFullMonthDay = fullMonthDay[month] === day;
      if (isFullMonthDay) {
        const log = cState.history[year] || Array(13).fill([]);
        log[month] = list;
        cState.history[year] = log;
      }

      cState.metaList = list;
      return R.mergeRight(state, cState);
    }

    default:
      return state;
  }
}
