import React from 'react';
import Presenter from './Presenter';

const Setting = () => {
  const onClickItem = (type: 'update' | 'alert') => () => {
    switch (type) {
      case 'update':
        return;
      case 'alert':
        return;
    }
  };

  return <Presenter onClickItem={onClickItem} />;
};

export default Setting;
