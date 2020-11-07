import * as ENDPOINTS from '@/constants/endpoints';
import {LOGIN} from './actions';
import {api} from '@/utils/api';
import {Auth} from '@stmt/application';
import {put, call, takeLatest} from 'redux-saga/effects';
import {globalSetError, globalSetLoading} from '../global/actions';
import {authLogin, authSetPartialData} from './actions';
import {AxiosError} from 'axios';

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

const loginApi = (body: Auth.SocialData) => api().post(ENDPOINTS.LOGIN, body);

export default function* authSaga() {
  yield takeLatest(LOGIN, login);
}
