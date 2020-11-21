import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTheme from '@/hooks/useTheme';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface ClickButtonProps {
  onClick: () => void;
}

export default (props: ClickButtonProps) => {
  const {onClick} = props;
  const theme = useTheme();

  const color = theme.primary;
  const name = 'share-social-outline';

  return (
    <Wrapper>
      <TouchableOpacity onPress={onClick}>
        <Ionicons color={color} size={32} name={name} />
      </TouchableOpacity>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row-reverse;
  padding-top: 10px;
  margin-left: 10px;
`;
