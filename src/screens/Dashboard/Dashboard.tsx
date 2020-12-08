import React from 'react';
import styled from 'styled-components/native';
import StyledView from '@/components/StyledView';
import RecordLogBoard from '@/containers/RecordLogBoard';
import RecordDetail from '@/containers/RecordDetail';

const Dashboard = () => {
  return (
    <Wrapper>
      <GraphView>
        <RecordLogBoard />
      </GraphView>
      <TextualView>
        <RecordDetail />
      </TextualView>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled(StyledView)`
  flex: 1;
`;

const GraphView = styled.View`
  flex: 1.5;
`;

const TextualView = styled.View`
  flex: 2;
  align-items: center;
`;
