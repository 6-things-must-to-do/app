import React from 'react';
import Presenter from './Presenter';

const ShareButtons = () => {
  const onClickAdd = () => {
    console.log('clicked!!!');
  };

  return <Presenter onClick={onClickAdd} />;
};

export default ShareButtons;
