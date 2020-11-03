import React from 'react';
import Presenter from './Presenter';

const Setting = () => {
  const onClickItem = () => () => {};

  return <Presenter onClickItem={onClickItem} />;
};

export default Setting;
