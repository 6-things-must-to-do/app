import React from 'react';
import styled from 'styled-components/native';
import {Data} from '@stmt/application';
import TodoInfo from '@/containers/TaskInfo';
import withPadding from '@/hocs/withPadding';
import TodoList from '@/containers/TodoList';
import StyledButton from '@/components/StyledButton';
import StyledText from '@/components/StyledText';

interface Props {
  task: Data.Task;
  onClickAddTask: () => void;
}

export default withPadding((props: Props) => {
  const {onClickAddTask} = props;
  return (
    <Wrapper>
      <TodoInfo />
      <TodoList />
      <StyledButton onPress={onClickAddTask} fullWidth>
        <StyledText>Add Task</StyledText>
      </StyledButton>
    </Wrapper>
  );
});

const Wrapper = styled.View`
  width: 100%;
  flex: 1;
`;
