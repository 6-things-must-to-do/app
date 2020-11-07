import * as ENDPOINTS from '@/constants/endpoints';
import {CHECK_TOKEN, LOGIN} from './actions';
import {api} from '@/utils/api';
import {Auth} from '@stmt/application';
import {put, call, takeLatest, select} from 'redux-saga/effects';
import {
  globalResetAll,
  globalSetError,
  globalSetLoading
} from '../global/actions';
import {authLogin, authSetPartialData} from './actions';
import {AxiosError} from 'axios';
import {AuthState, RootStore} from '@stmt/redux-store';
import {userSetData} from '../user/actions';
import {SagaError} from '@/utils/error';

function* login(action: ReturnType<typeof authLogin>) {
  const body = action.payload;
  try {
    const {data: response} = yield call(loginApi, body);
    yield put(authSetPartialData(response));
  } catch (e) {
    if (e.isAxiosError) {
      console.error((e as AxiosError).toJSON());
      console.error((e as AxiosError).response);
    }

    yield put(globalSetError(e));
  } finally {
    yield put(globalSetLoading(false));
  }
}

function* checkToken() {
  const {token} = yield select<(store: RootStore) => AuthState>(getAuthState);
  try {
    const {data} = yield call(checkTokenApi, token);

    yield put(userSetData(data));
  } catch (e) {
    const error = new SagaError(e.message, globalResetAll);

    yield put(globalResetAll());
    yield put(globalSetError(error));
  } finally {
    yield put(globalSetLoading(false));
  }
}

const loginApi = (body: Auth.SocialData) => api().post(ENDPOINTS.LOGIN, body);

const getAuthState = (store: RootStore) => store.auth;

const checkTokenApi = (token: string) => api(token).get(ENDPOINTS.MYPAGE);

export default function* authSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(CHECK_TOKEN, checkToken);
}
