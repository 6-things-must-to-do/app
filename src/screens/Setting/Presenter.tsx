import React from 'react';
import StyledList from '@/components/StyledList';
import StyledListItem from '@/components/StyledListItem';
import LogoutButton from '@/containers/LogoutButton';
import ClearCacheButton from '@/components/ClearCacheButton';

interface Props {
  onClickItem: (target: 'update' | 'task') => () => void;
}

export default (props: Props) => {
  const {onClickItem} = props;

  return (
    <StyledList>
      <StyledListItem
        title="Update user"
        description="Change user information"
        onPress={onClickItem('update')}
      />
      <StyledListItem
        title="Task related setting"
        description="Set task-related options"
        onPress={onClickItem('task')}
      />
      <LogoutButton />
      <ClearCacheButton />
    </StyledList>
  );
};
