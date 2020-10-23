import {
  createStore,
  applyMiddleware,
  combineReducers,
  CombinedState,
  Middleware,
} from 'redux';
import {PersistConfig, persistReducer, persistStore} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import auth, {AuthAction, authSaga} from './modules/auth';
import global from './modules/global';
import {AuthState, Store} from '@stmt/redux-store';
import {all} from 'redux-saga/effects';

const authPersistConfig: PersistConfig<AuthState> = {
  key: 'auth',
  storage,
};

const rootPersistConfig: PersistConfig<Store> = {
  storage,
  key: 'root',
  whitelist: [],
};

const rootReducer = combineReducers<Store>({
  auth: persistReducer<AuthState, AuthAction>(authPersistConfig, auth),
  global,
});

const persistedReducer = persistReducer<CombinedState<Store>>(
  rootPersistConfig,
  rootReducer,
);

function* rootSaga() {
  yield all([authSaga()]);
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
