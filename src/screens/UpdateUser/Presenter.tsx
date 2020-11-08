import StyledList from '@/components/StyledList';
import StyledListItem from '@/components/StyledListItem';
import StyledText from '@/components/StyledText';
import StyledView from '@/components/StyledView';
import UserProfileImage from '@/components/UserProfileImage';
import withPadding from '@/hocs/withPadding';
import {UserState} from '@stmt/redux-store';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  user: UserState;
}

export default withPadding((props: Props) => {
  const {user} = props;

  return (
    <Wrapper>
      <ProfileView useBorder>
        <ImageView>
          <UserProfile />
        </ImageView>
        <TextInfoView>
          <Username fontSize={16}>{user.nickname}</Username>
          <Email fontSize={14}>{user.email}</Email>
        </TextInfoView>
      </ProfileView>
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

const ProfileView = styled(StyledView)`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const ImageView = styled.View`
  flex: 1;
`;

const UserProfile = styled(UserProfileImage)`
  margin: 16px;
`;

const TextInfoView = styled.View`
  flex: 2;
  overflow: scroll;
`;

const Username = styled(StyledText)`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Email = styled(StyledText)``;
