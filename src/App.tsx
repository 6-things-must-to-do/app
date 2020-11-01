/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import getPersistedStore from '@/redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import TabNavigation from './navigations/TabNavigation';
import GlobalTheme from './components/GlobalTheme';
import ColoredSafeArea from './components/ColoredSafeArea';
import Loading from './containers/Loading';
import NavigationTheme from './components/NavigationTheme';
import {StatusBar} from 'react-native';

const App = (): ReactNode => {
  const {store, persistor} = getPersistedStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="default" />
        <GlobalTheme>
          <ColoredSafeArea />
          <NavigationTheme>
            <TabNavigation />
          </NavigationTheme>
          <ColoredSafeArea />
          <Loading />
        </GlobalTheme>
      </PersistGate>
    </Provider>
  );
};

export default App;
