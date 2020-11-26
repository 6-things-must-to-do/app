import {TASKS} from '@/constants/endpoints';
import {api} from '@/utils/api';
import {APIRequest, APIResponse} from '@stmt/application';
import {AuthState, CurrentTasksState, RootStore} from '@stmt/redux-store';

import {put, call, select, takeLatest} from 'redux-saga/effects';
import {globalSetError, globalSetLoading} from '../global/actions';
import {FETCH_CURRENT, LOCK, tasksSetData} from './actions';

// function* infoUpdate() {
//   //
// }

// function* completeTask() {
//   //
// }

function* fetchCurrent() {
  const {token} = yield select<(store: RootStore) => AuthState>(
    (store) => store.auth
  );

  try {
    yield put(globalSetLoading(true));

    const {
      data: {meta, tasks}
    }: {data: APIResponse.CurrentTasks} = yield call(fetchCurrentApi, token);

    yield put(tasksSetData({meta, tasks, lockTime: meta.lockTime}));
  } catch (e) {
    yield put(globalSetError(e));
  } finally {
    yield put(globalSetLoading(false));
  }
}

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
    yield put(globalSetError(e));
  } finally {
    yield put(globalSetLoading(false));
  }
}

const lockApi = (token: string, body: APIRequest.Lock) => {
  return api(token).post(TASKS, body);
};

const fetchCurrentApi = (token: string) => api(token).get(TASKS);

export default function* currentTasksSaga() {
  yield takeLatest(LOCK, lock);
  yield takeLatest(FETCH_CURRENT, fetchCurrent);
}
