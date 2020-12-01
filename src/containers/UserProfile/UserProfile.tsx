import React, {ReactNode} from 'react';
import StyledText from '@/components/StyledText';
import StyledView from '@/components/StyledView';
import UserProfileImage from '@/components/UserProfileImage';
import styled from 'styled-components/native';
import {Data} from '@stmt/application';

interface Props {
  user: Data.UserBase;
  addOn?: ReactNode;
}

const UserProfile = (props: Props) => {
  const {user, addOn} = props;
  const [imageRatio, textRatio, addOnRatio] = addOn ? [1, 2, 1] : [1, 3, 0];
  return (
    <ProfileView useBorder>
      <ImageView flex={imageRatio}>
        <ProfileImage profileImage={user.profileImage} />
      </ImageView>
      <TextInfoView flex={textRatio}>
        <Username fontSize={16}>{user.nickname}</Username>
        <Email fontSize={14}>{user.email}</Email>
      </TextInfoView>
      {addOn ? <AddOnView flex={addOnRatio}>{addOn}</AddOnView> : null}
    </ProfileView>
  );
};

export default UserProfile;

const ProfileView = styled(StyledView)`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

const ImageView = styled.View<{flex: number}>`
  flex: ${({flex}) => flex};
`;

const ProfileImage = styled(UserProfileImage)`
  margin: 16px;
`;

const TextInfoView = styled.View<{flex: number}>`
  flex: ${({flex}) => flex};
  overflow: scroll;
`;

const Username = styled(StyledText)`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Email = styled(StyledText)``;

const AddOnView = styled.View<{flex: number}>`
  flex: ${({flex}) => flex};
  justify-content: center;
  align-items: center;
`;
