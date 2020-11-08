import StyledView from '@/components/StyledView';
import LoginButtons from '@/containers/LoginButtons';
import withStyledViewLayout from '@/hocs/withStyledViewLayout';
import React from 'react';
import styled from 'styled-components/native';

const Login = () => {
  return (
    <Wrapper>
      <LoginButtons />
    </Wrapper>
  );
};

export default withStyledViewLayout(Login);

const Wrapper = styled(StyledView)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
