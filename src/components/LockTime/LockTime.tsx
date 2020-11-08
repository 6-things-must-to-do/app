import {AppSettingState, RootStore} from '@stmt/redux-store';
import React from 'react';
import {useSelector} from 'react-redux';
import StyledAddOn from '../StyledAddOn';

const LockTime = () => {
  const {lock} = useSelector<RootStore, AppSettingState>(
    (store) => store.appSetting
  );

  return <StyledAddOn>{`${lock} Hours`}</StyledAddOn>;
};

export default LockTime;
