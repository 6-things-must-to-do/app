import {Data} from '@stmt/application';
import {RecordState} from '@stmt/redux-store';

export const SET_DATA = 'RECORD/SET_DATA' as const;
export const SELECT_META = 'RECORD/SELECT_META' as const;
export const FETCH_META_LIST_COMPLETE = 'RECORD/FETCH_META_LIST_COMPLETE' as const;
export const FETCH_DETAIL_COMPLETE = 'RECORD/FETCH_DETAIL_COMPLETE' as const;

export const FETCH_META_LIST = 'RECORD/FETCH_META_LIST' as const;
export const FETCH_DETAIL = 'RECORD/FETCH_DETAIL' as const;

export const recordSetData = (data: Partial<RecordState>) => ({
  type: SET_DATA,
  payload: data
});

export const recordSelectMeta = (meta: Data.RecordMeta) => ({
  type: SELECT_META,
  payload: meta
});

export const recordFetchDetail = (lockTime: number) => ({
  type: FETCH_DETAIL,
  payload: lockTime
});

export const recordFetchDetailComplete = (tasks: Array<Data.Task>) => ({
  type: FETCH_DETAIL_COMPLETE,
  payload: tasks
});

export const recordFetchMetaList = (
  year: number,
  month: number,
  day?: number
) => ({
  type: FETCH_META_LIST,
  payload: {year, month, day}
});

export const recordFetchMetaListComplete = (payload: {
  year: number;
  month: number;
  day: number;
  list: Array<Data.RecordMeta>;
}) => ({
  type: FETCH_META_LIST_COMPLETE,
  payload
});
