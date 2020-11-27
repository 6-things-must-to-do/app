import * as ENDPOINTS from '@/constants/endpoints';
import {api} from '@/utils/api';
import {APIRequest, APIResponse} from '@stmt/application';
import {AuthState, CurrentTasksState, RootStore} from '@stmt/redux-store';
import {put, call, select, takeLatest} from 'redux-saga/effects';
import {globalSetError, globalSetLoading} from '../global/actions';
import {
  COMPLETE_TASK,
  FETCH_CURRENT,
  LOCK,
  UNLOCK,
  tasksCompleteTask,
  tasksCompleteUpdate,
  tasksOverwrite,
  tasksSetData,
  tasksUnlock
} from './actions';
import {initialState} from '.';
import {DynamoError} from '@/utils/error';

// function* infoUpdate() {
//   //
// }

function* completeTask(action: ReturnType<typeof tasksCompleteTask>) {
  const {token} = yield select<(store: RootStore) => AuthState>(
    (store) => store.auth
  );
  const {tasks} = yield select<(store: RootStore) => CurrentTasksState>(
    (store) => store.currentTasks
  );
  const {payload} = action;
  const completedAt = Date.now();

  try {
    yield put(globalSetLoading(true));
    yield call(completeTaskApi, token, payload, {completedAt});
    yield put(tasksCompleteUpdate(payload, completedAt));
  } catch (e) {
    yield put(globalSetError(e));
  } finally {
    if (payload === tasks.length - 1) {
      yield put(tasksUnlock());
    } else {
      yield put(globalSetLoading(false));
    }
  }
}

function* fetchCurrent() {
  const {token} = yield select<(store: RootStore) => AuthState>(
    (store) => store.auth
  );

  try {
    yield put(globalSetLoading(true));

    const {
      data: {meta, tasks}
    }: {data: APIResponse.CurrentTasks} = yield call(fetchCurrentApi, token);

    const current = tasks.findIndex((task) => !task.completedAt);

    yield put(tasksSetData({meta, tasks, lockTime: meta.lockTime, current}));
  } catch (e) {
    const axiosError = e?.response?.data;
    if (axiosError && DynamoError.isNotFound(axiosError)) {
      yield put(tasksSetData({tasks: []}));
      return;
    }

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

    yield put(tasksSetData({meta, lockTime, current: 0}));
  } catch (e) {
    yield put(globalSetError(e));
  } finally {
    yield put(globalSetLoading(false));
  }
}

function* unlock() {
  try {
    yield put(globalSetLoading(true));
    const {token} = yield select<(store: RootStore) => AuthState>(
      (store) => store.auth
    );

    const {data}: {data: APIResponse.Record} = yield call(unlockApi, token);
    const inCompletedTasks = data.tasks.filter((task) => !task.completedAt);

    const newState: CurrentTasksState = {
      ...initialState,
      tasks: inCompletedTasks
    };
    yield put(tasksOverwrite(newState));
  } catch (e) {
    yield put(globalSetError(e));
  } finally {
    yield put(globalSetLoading(false));
  }
}

const lockApi = (token: string, body: APIRequest.Lock) => {
  return api(token).post(ENDPOINTS.TASKS, body);
};

const unlockApi = (token: string) => api(token).delete(ENDPOINTS.TASKS);

const fetchCurrentApi = (token: string) => api(token).get(ENDPOINTS.TASKS);

const completeTaskApi = (
  token: string,
  priority: number,
  body: APIRequest.Complete
) =>
  api(token).put(ENDPOINTS.TASK_DETAIL(priority), body, {
    params: {type: 'task'}
  });

export default function* currentTasksSaga() {
  yield takeLatest(LOCK, lock);
  yield takeLatest(FETCH_CURRENT, fetchCurrent);
  yield takeLatest(COMPLETE_TASK, completeTask);
  yield takeLatest(UNLOCK, unlock);
}
