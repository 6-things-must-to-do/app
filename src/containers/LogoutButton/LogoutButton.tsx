import {globalResetAll} from '@/redux/modules/global/actions';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Presenter from './Presenter';

const LogoutButton = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const dispatch = useDispatch();

  const onConfirm = () => {
    dispatch(globalResetAll());
  };

  const onCancel = () => {
    setIsModalOn(false);
  };

  const onClickLogout = () => {
    setIsModalOn(true);
  };

  return (
    <Presenter
      onClick={onClickLogout}
      onCancel={onCancel}
      onConfirm={onConfirm}
      isModalOn={isModalOn}
    />
  );
};

export default LogoutButton;
