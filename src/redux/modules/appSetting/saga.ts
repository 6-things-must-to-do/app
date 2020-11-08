import {api} from '@/utils/api';
import {appSetSetData, appSetTaskAlert, SET_TASK_ALERT} from './actions';
import * as ENDPOINTS from '@/constants/endpoints';
import {APIResponse, AppSetting} from '@stmt/application';
import {put, select, takeLatest, call} from 'redux-saga/effects';
import {
  globalResetError,
  globalSetError,
  globalSetLoading
} from '../global/actions';
import {SagaError} from '@/utils/error';
import {AppSettingState, AuthState, RootStore} from '@stmt/redux-store';

const setTaskAlertApi = (token: string, body: AppSetting.SetAlert) =>
  api(token).put(ENDPOINTS.SETTING, body);

function* setTaskAlert(action: ReturnType<typeof appSetTaskAlert>) {
  const {payload} = action;
  try {
    yield put(globalSetLoading(true));
    const {token} = yield select<(store: RootStore) => AuthState>(
      (store) => store.auth
    );

    const {data}: {data: APIResponse.SetTaskAlert} = yield call(
      setTaskAlertApi,
      token,
      payload
    );

    const appSet: Partial<AppSettingState> = {
      setAlert: data.taskAlertSetting
    };

    yield put(appSetSetData(appSet));
  } catch (e) {
    const error = new SagaError(e.message, globalResetError);
    yield put(globalSetError(error));
  } finally {
    yield put(globalSetLoading(false));
  }
}

export default function* appSettingSaga() {
  yield takeLatest(SET_TASK_ALERT, setTaskAlert);
}
