/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar} from 'react-native';
import Login from './screens/Login';
import getPersistedStore from '@/redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const App: () => ReactNode = () => {
  const {store, persistor} = getPersistedStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Login />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
