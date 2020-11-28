import React from 'react';
import useTheme from '@/hooks/useTheme';
import styled from 'styled-components/native';
import StyledTextInput from '@/components/StyledTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';

interface ClickButtonProps {
  onClickSearch: () => void;
  onClickAdd: () => void;
  onTextInput: (text: string) => void;
  search: string;
}

export default (props: ClickButtonProps) => {
  const theme = useTheme();
  const {onClickSearch, onClickAdd, onTextInput, search} = props;
  const color = theme.secondary;

  return (
    <Wrapper>
      <Border borderColor={theme.secondary}>
        <StyledTextInput value={search} onChangeText={onTextInput} />
      </Border>
      <SearchIcon>
        <TouchableOpacity onPress={onClickSearch}>
          <Ionicons color={color} size={32} name={'search'} />
        </TouchableOpacity>
      </SearchIcon>
      <AddIcon>
        <TouchableOpacity onPress={onClickAdd}>
          <AntDesign color={color} size={32} name={'adduser'} />
        </TouchableOpacity>
      </AddIcon>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding-right: 10px;
`;

const Border = styled.View<{
  borderColor: string;
}>`
  ${(props) => `
  width: 70%;
  flex-direction: row;
  border: 1px solid ${props.borderColor};
  border-radius: 16px;
  margin-top: 16px;
  margin-left: 16px;
`}
`;

const SearchIcon = styled.TouchableOpacity`
  margin-top: 16px;
  flex-direction: row;
  margin-right: 10px;
`;

const AddIcon = styled.TouchableOpacity`
  margin-top: 16px;
  flex-direction: row;
`;
