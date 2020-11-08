import {intToClockString} from '@/utils/format';
import {hasSetAlertNull} from '@/utils/nullCheck';
import {AppSettingState, RootStore} from '@stmt/redux-store';
import React from 'react';
import {useSelector} from 'react-redux';
import StyledAddOn from '../StyledAddOn';

const AlertTime = () => {
  const {setAlert} = useSelector<RootStore, AppSettingState>(
    (store) => store.appSetting
  );
  if (!setAlert || hasSetAlertNull(setAlert)) return null;

  const {hour, minute} = setAlert;

  const division = hour > 12 ? 'PM' : 'AM';
  const h =
    division === 'AM' ? intToClockString(hour) : intToClockString(hour % 12);

  const m = intToClockString(minute);

  const string = `${division} ${h} : ${m}`;

  return <StyledAddOn>{string}</StyledAddOn>;
};

export default AlertTime;
