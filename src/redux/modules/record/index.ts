import * as R from 'ramda';
import {RecordState} from '@stmt/redux-store';
import {
  FETCH_DETAIL_COMPLETE,
  FETCH_META_LIST_COMPLETE,
  recordFetchDetailComplete,
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
  | typeof recordFetchDetailComplete
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
      const cState = R.clone(state);
      cState.selectedMeta = action.payload;
      return R.mergeRight(state, cState);
    }

    case FETCH_DETAIL_COMPLETE: {
      const cState = R.clone(state);

      cState.tasks = action.payload;
      return R.mergeRight(state, cState);
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
