import {MainStackParam} from '@/navigations/MainStack';
import {getToday} from '@/utils/date';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import Presenter from './Presenter';

const RecordToolbar = () => {
  const {navigate} = useNavigation<StackNavigationProp<MainStackParam>>();
  const [isLocked, setIsLocked] = useState(false);

  const day = getToday();

  const onPressLock = () => {
    setIsLocked(!isLocked);
  };

  const onPressDashboard = () => {
    navigate('Dashboard');
  };

  return (
    <Presenter
      day={day}
      isLocked={isLocked}
      onPressDashboard={onPressDashboard}
      onPressLock={onPressLock}
    />
  );
};

export default RecordToolbar;
