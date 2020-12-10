import {GetToken} from '@stmt/redux-store';
import * as ENDPOINTS from '@/constants/endpoints';
import {
  FETCH_DETAIL,
  FETCH_META_LIST,
  recordFetchDetail,
  recordFetchDetailComplete,
  recordFetchMetaList,
  recordFetchMetaListComplete
} from './actions';
import {put, call, select, takeLatest} from 'redux-saga/effects';
import {globalSetError, globalSetLoading} from '../global/actions';
import {api} from '@/utils/api';
import {Data} from '@stmt/application';

function* fetchDetail(action: ReturnType<typeof recordFetchDetail>) {
  const {payload: lockTime} = action;
  const {token} = yield select<GetToken>((store) => store.auth);
  try {
    yield put(globalSetLoading(true));
    const {data}: {data: Data.Rank} = yield call(
      fetchDetailApi,
      token,
      lockTime
    );

    yield put(recordFetchDetailComplete(data.tasks));
  } catch (e) {
    yield put(globalSetError(e?.response?.data || e));
  } finally {
    yield put(globalSetLoading(false));
  }
}

function* fetchRecordMeta(action: ReturnType<typeof recordFetchMetaList>) {
  const fullMonthDay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const {year, month, day = fullMonthDay[month]} = action.payload;
  const {token} = yield select<GetToken>((store) => store.auth);
  yield put(globalSetLoading(true));
  try {
    const {data: list}: {data: Array<Data.RecordMeta>} = yield call(
      fetchRecordMetaApi,
      token,
      {
        year,
        month,
        day
      }
    );

    yield put(recordFetchMetaListComplete({year, month, day, list}));
  } catch (e) {
    yield put(globalSetError(e));
  } finally {
    yield put(globalSetLoading(false));
  }
}

const fetchDetailApi = (token: string, lockTime: number) =>
  api(token).get(ENDPOINTS.RECORD_DETAIL(lockTime));

const fetchRecordMetaApi = (
  token: string,
  params: {year: number; month: number; day: number}
) => api(token).get(ENDPOINTS.RECORD_META_LIST, {params});

export default function* recordSaga() {
  yield takeLatest(FETCH_META_LIST, fetchRecordMeta);
  yield takeLatest(FETCH_DETAIL, fetchDetail);
}
