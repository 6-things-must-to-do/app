import React from 'react';
import Presenter from './Presenter';

const SocialButtons = () => {
  const onClickAdd = () => {
    console.log('clicked!!');
  };

  return <Presenter onClick={onClickAdd} />;
};

export default SocialButtons;
