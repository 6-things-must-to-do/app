import React from 'react';
import styled from 'styled-components/native';
import {TaskList as TL} from '@stmt/application';
import TaskList from '@/containers/TaskList';
import withPadding from '@/hocs/withPadding';
import RecordToolbar from '@/containers/RecordToolbar';

interface Props {
  taskList: Array<TL.Task>;
  isLocked: boolean;
}

export default (props: Props) => {
  const {taskList, isLocked} = props;
  return (
    <Wrapper>
      <RecordToolbar />
      <TaskList list={taskList} isRecord={false} isLocked={isLocked} />
    </Wrapper>
  );
};

const Wrapper = withPadding(styled.View`
  width: 100%;
  flex: 1;
`);
