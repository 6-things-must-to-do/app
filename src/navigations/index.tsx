import React, {useEffect} from 'react';
import {AuthState, RootStore} from '@stmt/redux-store';
import {useDispatch, useSelector} from 'react-redux';
import TabNavigation from './TabNavigation';
import Login from '@/screens/Login';
import {authCheckToken} from '@/redux/modules/auth/actions';

const RootNavigation = () => {
  const {token} = useSelector<RootStore, AuthState>((store) => store.auth);
  const dispatch = useDispatch();
  const isLoggedIn = Boolean(token);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(authCheckToken());
      return;
    }
  });

  return isLoggedIn ? <TabNavigation /> : <Login />;
};

export default RootNavigation;
