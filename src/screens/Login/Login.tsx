import StyledView from '@/components/StyledView';
import LoginButton from '@/containers/LoginButton';
import withLayout from '@/hocs/withLayout';
import React from 'react';
import styled from 'styled-components/native';

const Login = () => {
  return (
    <Wrapper>
      <LoginButton />
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
