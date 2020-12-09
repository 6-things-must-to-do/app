import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';
import StyledText from '@/components/StyledText';
import useTheme from '@/hooks/useTheme';

interface Props {
  day: string;
  isLocked: boolean;
  lockable: boolean;
  percent: number;
  onPressLock: () => void;
  onPressDashboard: () => void;
}

export default (props: Props) => {
  const {
    day,
    isLocked,
    percent,
    lockable,
    onPressLock,
    onPressDashboard
  } = props;
  const iconName = isLocked ? 'lock1' : 'unlock';
  const theme = useTheme();

  const width = Dimensions.get('screen').width;

  return (
    <>
      <ProgressView>
        <Progress.Bar
          progress={percent}
          color={theme.tint}
          width={width}
          height={4}
        />
      </ProgressView>
      <Wrapper>
        <Day>
          <StyledText>{day}</StyledText>
        </Day>
        <Buttons>
          <Button disabled={!lockable} onPress={onPressLock}>
            <AntDesign size={24} color={theme.secondary} name={iconName} />
          </Button>
          <Button onPress={onPressDashboard}>
            <AntDesign name="barschart" color={theme.secondary} size={24} />
          </Button>
        </Buttons>
      </Wrapper>
    </>
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

const ProgressView = styled.View`
  align-items: center;
`;
