import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import StyledText from '../StyledText';

interface Props {
  children: ReactNode;
}

export default (props: Props) => {
  const {children} = props;
  return (
    <Wrapper>
      <StyledText>{children}</StyledText>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
