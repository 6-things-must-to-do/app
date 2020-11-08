import * as ENDPOINTS from '@/constants/endpoints';
import {CHECK_TOKEN, LOGIN} from './actions';
import {api} from '@/utils/api';
import {APIResponse, Auth} from '@stmt/application';
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
import {appSetSetData} from '../appSetting/actions';

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
    const {data}: {data: APIResponse.MyPage} = yield call(checkTokenApi, token);
    const {email, uuid, profileImage, nickname, taskAlertSetting} = data;

    yield put(appSetSetData({setAlert: taskAlertSetting}));
    yield put(userSetData({email, uuid, profileImage, nickname}));
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

const checkTokenApi = (token: string) =>
  api(token).get<APIResponse.MyPage>(ENDPOINTS.MYPAGE);

export default function* authSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(CHECK_TOKEN, checkToken);
}
