import {put, takeLatest} from 'redux-saga/effects';
import {authReset} from '../auth/actions';
import {userReset} from '../user/actions';
import {globalReset, RESET_ALL} from './actions';

function* resetAll() {
  yield put(authReset());
  yield put(userReset());
  yield put(globalReset());
}

export default function* globalSaga() {
  yield takeLatest(RESET_ALL, resetAll);
}
