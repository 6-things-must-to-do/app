import {api} from '@/utils/api';
import {getYesterdayTimestamp} from '@/utils/date';
import {SagaError} from '@/utils/error';
import {APIResponse, Data} from '@stmt/application';
import * as ENDPOINTS from '@/constants/endpoints';
import {AuthState, RankType, RootStore} from '@stmt/redux-store';
import {put, select, takeLatest, call} from 'redux-saga/effects';
import {
  globalResetError,
  globalSetError,
  globalSetLoading
} from '../global/actions';
import {CHANGE_RANK_TYPE, socialChangeRankType, socialSetData} from './actions';

const cached: {[P in RankType]: {[date: number]: Array<Data.Rank>}} = {
  all: {},
  friends: {}
};

function* getRankByDate(action: ReturnType<typeof socialChangeRankType>) {
  const type = action.payload;
  const timestamp = getYesterdayTimestamp();

  const cachedRanking = cached[type][timestamp];

  console.log(cached);

  const base = {date: timestamp, type};

  if (cachedRanking) {
    yield put(socialSetData({...base, ranking: cachedRanking}));
    return;
  }

  const {token} = yield select<(store: RootStore) => AuthState>(
    (store) => store.auth
  );

  yield put(globalSetLoading(true));
  try {
    if (!token) {
      throw new Error('다시 로그인 해주세요.');
    }
    const {data}: {data: APIResponse.Rank} = yield call(
      getRanking,
      token,
      timestamp
    );

    cached[type][timestamp] = data.records;

    yield put(socialSetData({...base, ranking: data.records}));
  } catch (e) {
    const error = new SagaError(e.message, globalResetError);
    yield put(globalSetError(error));
  } finally {
    yield put(globalSetLoading(false));
  }
}

const getRanking = (token: string, timestamp: number) =>
  api(token).get<APIResponse.Rank>(ENDPOINTS.RANK_ALL, {
    params: {time: timestamp}
  });

export default function* socialSaga() {
  yield takeLatest(CHANGE_RANK_TYPE, getRankByDate);
}
