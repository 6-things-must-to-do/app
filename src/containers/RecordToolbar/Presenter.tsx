import React from 'react';
import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StyledText from '@/components/StyledText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useTheme from '@/hooks/useTheme';

interface Props {
  day: string;
  isLocked: boolean;
  onPressLock: () => void;
}

export default (props: Props) => {
  const {day, isLocked, onPressLock} = props;
  const iconName = isLocked ? 'lock-open' : 'lock';
  const theme = useTheme();

  return (
    <Wrapper>
      <Day>
        <StyledText>{day}</StyledText>
      </Day>
      <Buttons>
        <TouchableOpacity onPress={onPressLock}>
          <FontAwesome5 size={24} color={theme.secondary} name={iconName} />
        </TouchableOpacity>
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: 16px;
  padding-horizontal: 8px;
`;

const Day = styled.View``;

const Buttons = styled.View``;
