import React from 'react';
import styled from 'styled-components/native';
import TaskList from '@/containers/TaskList';
import withPadding from '@/hocs/withPadding';
import RecordToolbar from '@/containers/RecordToolbar';

const Main = () => {
  return (
    <Wrapper>
      <RecordToolbar />
      <TaskList editable />
    </Wrapper>
  );
};

export default Main;

const Wrapper = withPadding(styled.View`
  width: 100%;
  flex: 1;
`);
