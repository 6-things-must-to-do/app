import ConfirmModal from '@/components/ConfirmModal';
import {globalResetError} from '@/redux/modules/global/actions';
import {SagaError} from '@/utils/error';
import {GlobalState, RootStore} from '@stmt/redux-store';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const GlobalErrorHandler = () => {
  const {error} = useSelector<RootStore, GlobalState>((store) => store.global);
  const dispatch = useDispatch();

  const onConfirm = () => {
    if (error instanceof SagaError && error.action) {
      dispatch(error.action());
    }
    dispatch(globalResetError());
  };

  const isVisible = Boolean(error);
  return (
    <ConfirmModal
      information={error?.message}
      isVisible={isVisible}
      useCancelButton={false}
      onConfirm={onConfirm}
    />
  );
};

export default GlobalErrorHandler;
