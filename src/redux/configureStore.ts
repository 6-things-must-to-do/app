import {
  createStore,
  applyMiddleware,
  combineReducers,
  CombinedState,
  Middleware
} from 'redux';
import {PersistConfig, persistReducer, persistStore} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import auth, {AuthAction, authSaga} from './modules/auth';
import record, {RecordAction} from './modules/record';
import global from './modules/global';
import user from './modules/user';
import dashboard from './modules/dashboard';
import appSetting, {AppSettingAction} from './modules/appSetting';
import {
  AppSettingState,
  AuthState,
  RecordState,
  RootStore
} from '@stmt/redux-store';
import {all} from 'redux-saga/effects';
import globalSaga from './modules/global/saga';
import appSettingSaga from './modules/appSetting/saga';
import dashboardSaga from './modules/dashboard/saga';

const authPersistConfig: PersistConfig<AuthState> = {
  key: 'auth',
  storage
};

const recordPersistConfig: PersistConfig<RecordState> = {
  key: 'record',
  storage
};

const appSettingPersistConfig: PersistConfig<AppSettingState> = {
  key: 'appSetting',
  storage
};

const rootPersistConfig: PersistConfig<RootStore> = {
  storage,
  key: 'root',
  whitelist: []
};

const rootReducer = combineReducers<RootStore>({
  auth: persistReducer<AuthState, AuthAction>(authPersistConfig, auth),
  appSetting: persistReducer<AppSettingState, AppSettingAction>(
    appSettingPersistConfig,
    appSetting
  ),
  global,
  user,
  dashboard,
  record: persistReducer<RecordState, RecordAction>(recordPersistConfig, record)
});

const persistedReducer = persistReducer<CombinedState<RootStore>>(
  rootPersistConfig,
  rootReducer
);

function* rootSaga() {
  yield all([authSaga(), globalSaga(), appSettingSaga(), dashboardSaga()]);
}

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Array<Middleware> = [sagaMiddleware];
  if (__DEV__) {
    middlewares.push(logger);
  }

  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};
