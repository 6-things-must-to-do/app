import {getToday} from '@/utils/date';
import React, {useState} from 'react';
import Presenter from './Presenter';

const RecordToolbar = () => {
  const [isLocked, setIsLocked] = useState(false);

  const day = getToday();

  const onPressLock = () => {
    setIsLocked(!isLocked);
  };

  return <Presenter day={day} isLocked={isLocked} onPressLock={onPressLock} />;
};

export default RecordToolbar;
