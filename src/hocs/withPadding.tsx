import React from 'react';
import styled from 'styled-components/native';

export default function withPadding<T>(Component: React.FC<T>) {
  return (props: T) => (
    <Wrapper>
      <Component {...props} />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  padding: 16px;
`;
