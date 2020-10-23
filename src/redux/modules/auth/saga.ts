import * as ENDPOINTS from '@/constants/endpoints';
import {LOGIN} from './actions';
import {api} from '@/utils/api';
import {Auth} from '@stmt/application';
import {put, call, takeLatest} from 'redux-saga/effects';
import {globalSetError} from '../global/actions';
import {authLogin, authSetPartialData} from './actions';

function* login(action: ReturnType<typeof authLogin>) {
  const {provider, appId} = action.payload;
  try {
    const {data} = yield call(loginApi, provider, appId);
    yield put(authSetPartialData(data));
  } catch (e) {
    yield put(globalSetError(e));
  }
}

const loginApi = (provider: Auth.Provider, appId: string) =>
  api().post(ENDPOINTS.LOGIN, {provider, appId});

export default function* authSaga() {
  yield takeLatest(LOGIN, login);
}
