import StyledList from '@/components/StyledList';
import StyledListItem from '@/components/StyledListItem';
import UserProfile from '@/containers/UserProfile';
import withPadding from '@/hocs/withPadding';
import {Data} from '@stmt/application';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  user: Data.UserBase;
}

export default withPadding((props: Props) => {
  const {user} = props;

  return (
    <Wrapper>
      <UserProfile user={user} />
      <StyledList>
        <StyledListItem
          title="Change nickname"
          description="Changes the user account's nickname"
        />
        <StyledListItem
          title="Set openness scope"
          description="Set the public scope about your record"
        />
      </StyledList>
    </Wrapper>
  );
});

const Wrapper = styled.ScrollView`
  width: 100%;
`;
