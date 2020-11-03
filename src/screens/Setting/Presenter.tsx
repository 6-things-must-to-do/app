import React from 'react';
import StyledList from '@/components/StyledList';
import StyledListItem from '@/components/StyledListItem';

interface Props {
  onClickItem: (target: string) => () => void;
}

export default (props: Props) => {
  const {onClickItem} = props;

  return (
    <StyledList>
      <StyledListItem
        title="Change Username"
        description="Change username"
        onPress={onClickItem('changeUsername')}
      />
      <StyledListItem
        title="Set alert"
        description="Set alert"
        onPress={onClickItem('setAlert')}
      />
    </StyledList>
  );
};
