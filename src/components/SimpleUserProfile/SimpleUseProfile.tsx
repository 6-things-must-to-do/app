import {Data} from '@stmt/application';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import StyledText from '../StyledText';
import UserProfileImage from '../UserProfileImage';

interface Props {
  user: Data.UserBase;
  onClick: (uuid: string) => () => void;
}

const SimpleUserProfile = (props: Props) => {
  const {user, onClick} = props;
  return (
    <TouchableOpacity onPress={onClick(user.uuid)}>
      <Wrapper>
        <ProfileImageView>
          <UserProfileImage size={40} profileImage={user.profileImage} />
        </ProfileImageView>
        <TextView>
          <StyledText>{user.nickname}</StyledText>
        </TextView>
      </Wrapper>
    </TouchableOpacity>
  );
};

export default SimpleUserProfile;

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  margin-vertical: 4px;
`;

const ProfileImageView = styled.View`
  margin-right: 8px;
  flex: 1;
`;

const TextView = styled.View`
  flex: 3;
  justify-content: center;
`;
