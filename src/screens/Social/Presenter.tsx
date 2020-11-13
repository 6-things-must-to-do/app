import Ranking from '@/containers/Ranking';
import React from 'react';
import styled from 'styled-components/native';

export default () => {
  return (
    <Wrapper>
      <Ranking />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  flex: 1;
`;
