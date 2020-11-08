import {authCheckToken} from '@/redux/modules/auth/actions';
import {RootStore, UserState} from '@stmt/redux-store';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Presenter from './Presenter';

const UpdateUser = () => {
  const user = useSelector<RootStore, UserState>((store) => store.user);
  const dispatch = useDispatch();
  const fetchUserState = () => {
    dispatch(authCheckToken());
  };

  if (!user.email) fetchUserState();

  return <Presenter user={user} />;
};

export default UpdateUser;
