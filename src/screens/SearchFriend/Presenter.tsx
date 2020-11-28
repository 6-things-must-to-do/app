import StyledTextInput from '@/components/StyledTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTheme from '@/hooks/useTheme';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Data} from '@stmt/application';
import StyledText from '@/components/StyledText';

interface Props {
  onClickSearch: () => void;
  onChangeText: (text: string) => void;
  search: string;
  user?: Data.UserProfile;
}

export default (props: Props) => {
  const {onClickSearch, user, search, onChangeText} = props;
  const theme = useTheme();
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
      <UserView>
        {user ? <StyledText>{JSON.stringify(user)}</StyledText> : null}
      </UserView>
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
  flex: 1;
`;
