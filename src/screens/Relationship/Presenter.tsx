import StyledTextInput from '@/components/StyledTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTheme from '@/hooks/useTheme';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Data} from '@stmt/application';
import ContentLoader, {Rect} from 'react-content-loader/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UserProfile from '@/containers/UserProfile';
import RelationshipList from '@/containers/RelationshipList';

interface Props {
  onClickSearch: () => void;
  onClickAdd: () => void;
  onChangeText: (text: string) => void;
  isLoading: boolean;
  isInList: boolean;
  search: string;
  user?: Data.UserBase;
}

export default (props: Props) => {
  const {
    onClickSearch,
    onClickAdd,
    user,
    search,
    isLoading,
    isInList,
    onChangeText
  } = props;
  const theme = useTheme();

  const LoadingComponent = () => (
    <ContentLoader
      height={140}
      speed={1}
      backgroundColor={theme.outfocus}
      foregroundColor={theme.contrast}
      viewBox="0 0 380 70">
      <Rect x="0" y="0" rx="40" ry="40" width="70" height="70" />
      <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    </ContentLoader>
  );

  const addOnIcon = isInList ? 'check' : 'adduser';

  return (
    <Wrapper>
      <TextInputView borderColor={theme.secondary}>
        <StyledTextInput
          value={search}
          onChangeText={onChangeText}
          placeholder="Search user's email"
        />
        <SearchIcon>
          <TouchableOpacity onPress={onClickSearch}>
            <Ionicons color={theme.secondary} size={32} name={'search'} />
          </TouchableOpacity>
        </SearchIcon>
      </TextInputView>
      {
        <UserView>
          {isLoading ? (
            <LoadingComponent />
          ) : user ? (
            <UserProfile
              user={user}
              addOn={
                <TouchableOpacity disabled={isInList} onPress={onClickAdd}>
                  <AntDesign
                    color={theme.secondary}
                    size={32}
                    name={addOnIcon}
                  />
                </TouchableOpacity>
              }
            />
          ) : null}
        </UserView>
      }
      <RelationshipList />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`;

const SearchIcon = styled.TouchableOpacity`
  margin-right: 10px;
`;

const TextInputView = styled.View<{borderColor: string}>`
  height: 48px;
  margin: 4px;
  border-bottom-width: 1px;
  border-bottom-color: ${({borderColor}) => borderColor};
  flex-direction: row;
  align-items: center;
`;

const UserView = styled.View`
  width: 100%;
  padding: 16px;
`;
