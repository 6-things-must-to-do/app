/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {ReactNode, useEffect} from 'react';
import {Provider} from 'react-redux';
import getPersistedStore from '@/redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import GlobalTheme from './contexts/GlobalTheme';
import ColoredSafeArea from './components/ColoredSafeArea';
import Loading from './containers/Loading';
import NavigationTheme from './components/NavigationTheme';
import {StatusBar} from 'react-native';
import RootNavigation from './navigations';
// import Test from './screens/Test';
import GlobalErrorHandler from './containers/GlobalErrorHandler';

const App = (): ReactNode => {
  const {store, persistor} = getPersistedStore();

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="default" />
        <GlobalTheme>
          <ColoredSafeArea />
          <NavigationTheme>
            <RootNavigation />
          </NavigationTheme>
          <ColoredSafeArea />
          <GlobalErrorHandler />
          <Loading />
        </GlobalTheme>
      </PersistGate>
    </Provider>
  );
};

export default App;
