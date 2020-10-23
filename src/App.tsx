/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Login from './screens/Login';

const App: () => ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </>
  );
};

export default App;
