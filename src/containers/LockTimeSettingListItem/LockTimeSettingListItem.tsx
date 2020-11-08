import React from 'react';
import Presenter from './Presenter';

const LockTimeSettingListItem = () => {
  const onClick = () => {
    //setIsPickerOpen(true);
  };

  return <Presenter onClick={onClick} />;
};

export default LockTimeSettingListItem;
