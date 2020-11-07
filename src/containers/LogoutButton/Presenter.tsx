import ConfirmModal from '@/components/ConfirmModal';
import StyledListItem from '@/components/StyledListItem';
import React from 'react';

interface Props {
  onClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
  isModalOn: boolean;
}

export default (props: Props) => {
  const {isModalOn, onClick, onCancel, onConfirm} = props;
  return (
    <>
      <StyledListItem
        title="Logout"
        description="Log out the user"
        onPress={onClick}
      />
      <ConfirmModal
        information="Are you sure you want to log out?"
        confirmText="Logout"
        useCancelButton
        onCancel={onCancel}
        onConfirm={onConfirm}
        isVisible={isModalOn}
      />
    </>
  );
};
