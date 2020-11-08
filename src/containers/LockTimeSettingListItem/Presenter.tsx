import LockTime from '@/components/LockTime';
import StyledListItem from '@/components/StyledListItem';
import React from 'react';

interface Props {
  onClick: () => void;
}

export default (props: Props) => {
  const {onClick} = props;
  return (
    <StyledListItem
      title="Set task lock time"
      description="Set how many hours to lock tasks"
      addOn={<LockTime />}
      onPress={onClick}
    />
  );
};
