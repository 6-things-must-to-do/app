import * as ENDPOINTS from '@/constants/endpoints';
import {LOGIN} from './actions';
import {api} from '@/utils/api';
import {Auth} from '@stmt/application';
import {put, call, takeLatest} from 'redux-saga/effects';
import {globalSetError} from '../global/actions';
import {authLogin, authSetPartialData} from './actions';

function* login(action: ReturnType<typeof authLogin>) {
  const {provider, data} = action.payload;
  try {
    const {data: response} = yield call(loginApi, provider, data);
    yield put(authSetPartialData(response));
  } catch (e) {
    yield put(globalSetError(e));
  }
}

const loginApi = (provider: Auth.Provider, data: Auth.SocialData) =>
  api().post(ENDPOINTS.LOGIN, {provider, ...data});

export default function* authSaga() {
  yield takeLatest(LOGIN, login);
}
