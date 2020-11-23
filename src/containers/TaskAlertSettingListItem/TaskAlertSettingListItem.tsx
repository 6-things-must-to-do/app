import {appSetTaskAlert} from '@/redux/modules/appSetting/actions';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Presenter from './Presenter';
import dayjs from 'dayjs';
import {AppSettingState, RootStore} from '@stmt/redux-store';

const TaskAlertSettingListItem = () => {
  const [pickerValue, setPickerValue] = useState(new Date());
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const dispatch = useDispatch();

  const {setAlert} = useSelector<RootStore, AppSettingState>(
    (store) => store.appSetting
  );

  const onClick = () => {
    setIsPickerOpen(true);
  };

  const onCancel = () => {
    setIsPickerOpen(false);
  };

  const onConfirm = (date?: Date) => {
    if (!date) throw new Error('Date 필요');
    const hour = dayjs(date).get('hour');
    const minute = dayjs(date).get('minute');
    const offset = date.getTimezoneOffset();

    dispatch(appSetTaskAlert({hour, minute, offset}));
    setIsPickerOpen(false);
  };

  useEffect(() => {
    if (
      setAlert &&
      !Number.isNaN(setAlert.hour) &&
      !Number.isNaN(setAlert.minute)
    ) {
      const date = dayjs().hour(setAlert.hour).minute(setAlert.minute).toDate();
      setPickerValue(date);
    }
  }, [setAlert]);

  return (
    <Presenter
      onCancel={onCancel}
      pickerValue={pickerValue}
      onConfirm={onConfirm}
      isPickerOpen={isPickerOpen}
      onClick={onClick}
    />
  );
};

export default TaskAlertSettingListItem;
