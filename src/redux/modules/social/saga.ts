import {api} from '@/utils/api';
import {getYesterdayTimestamp} from '@/utils/date';
import {DynamoError, SagaError} from '@/utils/error';
import {APIResponse, Data} from '@stmt/application';
import * as ENDPOINTS from '@/constants/endpoints';
import {AuthState, GetToken, RankType, RootStore} from '@stmt/redux-store';
import {put, select, takeLatest, call} from 'redux-saga/effects';
import {
  globalResetError,
  globalSetError,
  globalSetLoading
} from '../global/actions';
import {
  CHANGE_RANK_TYPE,
  FETCH_FOLLOWER,
  FETCH_FOLLOWING,
  FOLLOW,
  socialChangeRankType,
  socialFollow,
  socialGetFollower,
  socialGetFollowings,
  socialPushFollowing,
  socialSetData
} from './actions';

function* fetchSocial(
  action: ReturnType<typeof socialGetFollower | typeof socialGetFollowings>
) {
  const type = action.type;
  const target = type === 'SOCIAL/FETCH_FOLLOWER' ? 'follower' : 'following';
  const {token} = yield select<GetToken>((store) => store.auth);
  yield put(globalSetLoading(true));
  try {
    const {
      data
    }: {
      data: APIResponse.FollowerList | APIResponse.FollowingList;
    } = yield call(fetchSocialApi, token, target);

    let list: Array<Data.UserBase>;
    if ('follower' in data) {
      list = data.follower;
    } else {
      list = data.following;
    }
    yield put(socialSetData({[target]: list}));
  } catch (e) {
    const axiosError = e?.response?.data;
    if (axiosError && DynamoError.isNotFound(axiosError)) return;
    yield put(globalSetError(axiosError || e));
  } finally {
    yield put(globalSetLoading(false));
  }
}

function* follow(action: ReturnType<typeof socialFollow>) {
  const {payload: user} = action;
  const {token} = yield select<GetToken>((store) => store.auth);
  yield put(globalSetLoading(true));
  try {
    yield call(followApi, token, user.email);
    yield put(socialPushFollowing(user));
  } catch (e) {
    const axiosError = e?.response?.data;
    const mainError = axiosError || e;
    yield put(globalSetError(mainError));
  } finally {
    yield put(globalSetLoading(false));
  }
}

const cached: {[P in RankType]: {[date: number]: Array<Data.Rank>}} = {
  all: {},
  friends: {}
};

function* getRankByDate(action: ReturnType<typeof socialChangeRankType>) {
  const type = action.payload;
  const timestamp = getYesterdayTimestamp();

  const cachedRanking = cached[type][timestamp];

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

const followApi = (token: string, email: string) =>
  api(token).post(ENDPOINTS.FRIENDS(email));

const fetchSocialApi = (token: string, type: Data.RelationType) =>
  api(token).get(ENDPOINTS.RELATIONSHIPS(type));

export default function* socialSaga() {
  yield takeLatest(FOLLOW, follow);
  yield takeLatest(CHANGE_RANK_TYPE, getRankByDate);
  yield takeLatest(FETCH_FOLLOWER, fetchSocial);
  yield takeLatest(FETCH_FOLLOWING, fetchSocial);
}
