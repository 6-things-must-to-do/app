import React from 'react';
import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TodoInfo from '@/containers/TaskInfo';
import withPadding from '@/hocs/withPadding';
import TodoList from '@/containers/TodoList';
import StyledButton from '@/components/StyledButton';
import StyledText from '@/components/StyledText';

interface Props {
  onClickAddTask: () => void;
  buttonText: string;
}

export default withPadding((props: Props) => {
  const {onClickAddTask, buttonText} = props;
  return (
    <Wrapper>
      <KeyboardAwareScrollView>
        <TodoInfo />
        <TodoList />
      </KeyboardAwareScrollView>
      <StyledButton onPress={onClickAddTask} fullWidth>
        <StyledText>{buttonText}</StyledText>
      </StyledButton>
    </Wrapper>
  );
});

const Wrapper = styled.View`
  width: 100%;
  flex: 1;
`;
