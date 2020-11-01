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
import getPersistedStore from '@/redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import TabNavigation from './navigations/TabNavigation';

const App = (): ReactNode => {
  const {store, persistor} = getPersistedStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <TabNavigation />
        <SafeAreaView />
      </PersistGate>
    </Provider>
  );
};

export default App;
