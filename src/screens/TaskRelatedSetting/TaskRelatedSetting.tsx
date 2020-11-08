import React, {useEffect, useState} from 'react';
import {Event, AndroidEvent} from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import Presenter from './Presenter';
import {Platform} from 'react-native';
import {appSetTaskAlert} from '@/redux/modules/appSetting/actions';
import {useDispatch, useSelector} from 'react-redux';
import {AppSettingState, RootStore} from '@stmt/redux-store';

const TaskRelatedSetting = () => {
  const [alertTime, setAlertTime] = useState(new Date());
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [isOpenHourPicker, setIsOpenHourPicker] = useState(false);
  const dispatch = useDispatch();
  const {setAlert} = useSelector<RootStore, AppSettingState>(
    (store) => store.appSetting
  );

  const onChangeAlert = (event: AndroidEvent & Event, date?: Date) => {
    if (event.type === 'dismissed') {
      setIsOpenDatePicker(false);
      return;
    }

    if (Platform.OS === 'android') {
      setIsOpenDatePicker(false);
    }

    if (!date) throw new Error('Date 필요');
    const hour = dayjs(date).get('hour');
    const minute = dayjs(date).get('minute');
    const offset = date.getTimezoneOffset();

    dispatch(appSetTaskAlert({hour, minute, offset}));
    setIsOpenDatePicker(false);
  };

  const onClickAlert = () => {
    setIsOpenDatePicker(true);
  };

  const onClickLock = () => {
    setIsOpenHourPicker(true);
  };

  const onClickMenu = (type: 'alert' | 'lock') => () => {
    switch (type) {
      case 'alert':
        onClickAlert();
        return;
      case 'lock':
        onClickLock();
        return;
    }
  };

  useEffect(() => {
    if (setAlert && setAlert.hour && setAlert.minute) {
      const date = dayjs().hour(setAlert.hour).minute(setAlert.minute).toDate();
      setAlertTime(date);
    }
  }, [setAlert]);

  return (
    <Presenter
      onChangeAlert={onChangeAlert}
      onClickMenu={onClickMenu}
      isOpenDatePicker={isOpenDatePicker}
      isOpenHourPicker={isOpenHourPicker}
      alertTime={alertTime}
    />
  );
};

export default TaskRelatedSetting;
