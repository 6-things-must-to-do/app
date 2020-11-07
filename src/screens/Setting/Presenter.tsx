import React from 'react';
import StyledList from '@/components/StyledList';
import StyledListItem from '@/components/StyledListItem';
import styled from 'styled-components/native';
import LogoutButton from '@/containers/LogoutButton';

interface Props {
  onClickItem: (target: 'update' | 'alert') => () => void;
}

export default (props: Props) => {
  const {onClickItem} = props;

  return (
    <Wrapper>
      <StyledList>
        <StyledListItem
          title="Update user"
          description="Change user information"
          onPress={onClickItem('update')}
        />
        <StyledListItem
          title="Set alert"
          description="Set task-related alarms"
          onPress={onClickItem('alert')}
        />
        <LogoutButton />
      </StyledList>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  padding: 16px;
  flex: 1;
`;
