import React from 'react';
import useTheme from '@/hooks/useTheme';
import styled from 'styled-components/native';
import StyledTextInput from '@/components/StyledTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

interface ClickButtonProps {
  onClick: () => void;
}

export default (props: ClickButtonProps) => {
  const theme = useTheme();
  const {onClick} = props;

  const color = theme.primary;
  const name = 'search';

  return (
    <>
      <Border borderColor={theme.secondary}>
        <StyledTextInput color={'contrast'} />
      </Border>
      <Icon>
        <TouchableOpacity onPress={onClick}>
          <Ionicons color={color} size={32} name={name} />
        </TouchableOpacity>
      </Icon>
    </>
  );
};

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

const Icon = styled.TouchableOpacity`
  margin-top: 16px;
`;
