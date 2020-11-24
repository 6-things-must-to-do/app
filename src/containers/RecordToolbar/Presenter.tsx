import React from 'react';
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StyledText from '@/components/StyledText';
import useTheme from '@/hooks/useTheme';

interface Props {
  day: string;
  isLocked: boolean;
  onPressLock: () => void;
  onPressDashboard: () => void;
}

export default (props: Props) => {
  const {day, isLocked, onPressLock, onPressDashboard} = props;
  const iconName = isLocked ? 'lock1' : 'unlock';
  const theme = useTheme();

  return (
    <Wrapper>
      <Day>
        <StyledText>{day}</StyledText>
      </Day>
      <Buttons>
        <Button onPress={onPressLock}>
          <AntDesign size={24} color={theme.secondary} name={iconName} />
        </Button>
        <Button onPress={onPressDashboard}>
          <AntDesign name="barschart" color={theme.secondary} size={24} />
        </Button>
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

const Button = styled.TouchableOpacity`
  margin-horizontal: 8px;
`;

const Buttons = styled.View`
  flex-direction: row;
`;
