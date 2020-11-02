import React from 'react';
import {AuthState, RootStore} from '@stmt/redux-store';
import {useSelector} from 'react-redux';
import TabNavigation from './TabNavigation';
import Login from '@/screens/Login';

const RootNavigation = () => {
  const {token} = useSelector<RootStore, AuthState>((store) => store.auth);
  const isLoggedIn = Boolean(token);

  return isLoggedIn ? <TabNavigation /> : <Login />;
};

export default RootNavigation;
