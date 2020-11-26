import {TASKS} from '@/constants/endpoints';
import {api} from '@/utils/api';
import {APIRequest} from '@stmt/application';
import {AuthState, CurrentTasksState, RootStore} from '@stmt/redux-store';

import {put, call, select, takeLatest} from 'redux-saga/effects';
import {globalSetLoading} from '../global/actions';
import {LOCK, tasksSetData} from './actions';

function* lock() {
  const lockTime = Date.now();

  yield put(globalSetLoading(true));
  try {
    const {token} = yield select<(store: RootStore) => AuthState>(
      (store) => store.auth
    );

    const {tasks} = yield select<(store: RootStore) => CurrentTasksState>(
      (store) => store.currentTasks
    );

    const body: APIRequest.Lock = {
      lockTime,
      current: {tasks}
    };

    const {
      data: {meta}
    } = yield call(lockApi, token, body);

    yield put(tasksSetData({meta, lockTime}));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(globalSetLoading(false));
  }
}

const lockApi = (token: string, body: APIRequest.Lock) => {
  return api(token).post(TASKS, body);
};

export default function* currentTasksSaga() {
  yield takeLatest(LOCK, lock);
}
