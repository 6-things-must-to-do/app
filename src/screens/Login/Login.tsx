import StyledView from '@/components/StyledView';
import LoginButtons from '@/containers/LoginButtons';
import withLayout from '@/hocs/withLayout';
import React from 'react';
import styled from 'styled-components/native';

const Login = () => {
  return (
    <Wrapper>
      <LoginButtons />
    </Wrapper>
  );
};

export default withLayout(Login);

const Wrapper = styled(StyledView)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
