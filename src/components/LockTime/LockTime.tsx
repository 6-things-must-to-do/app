import {appSetLockHours} from '@/redux/modules/appSetting/actions';
import {isNumber} from '@/utils/valueCheck';
import {AppSettingState, RootStore} from '@stmt/redux-store';
import React, {ReactText} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Picker, {PickerItem} from '../Picker';

const LockTime = () => {
  const {lock} = useSelector<RootStore, AppSettingState>(
    (store) => store.appSetting
  );
  const dispatch = useDispatch();

  const onValueChange = (itemValue: ReactText) => {
    const hour = Number(itemValue);

    if (!isNumber(hour)) throw new Error('숫자 값이 아님');

    dispatch(appSetLockHours(hour));
  };

  const candidatesFactory = () => {
    const candidates: Array<PickerItem<number>> = new Array(12)
      .fill(true)
      .map((_, index) => ({value: index + 1, label: `${index + 1} Hours`}));

    candidates[0].label = `1 Hour`;

    return candidates;
  };

  const candidates = candidatesFactory();

  return (
    <Picker selected={lock} items={candidates} onValueChange={onValueChange} />
  );
};

export default LockTime;
