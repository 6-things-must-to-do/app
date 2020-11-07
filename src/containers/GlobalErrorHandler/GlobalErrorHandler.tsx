import ConfirmModal from '@/components/ConfirmModal';
import {GlobalState, RootStore} from '@stmt/redux-store';
import React from 'react';
import {useSelector} from 'react-redux';

const GlobalErrorHandler = () => {
  const {error} = useSelector<RootStore, GlobalState>((store) => store.global);

  const isVisible = Boolean(error);
  return (
    <ConfirmModal
      information={error?.message}
      isVisible={isVisible}
      useCancelButton={false}
    />
  );
};

export default GlobalErrorHandler;
