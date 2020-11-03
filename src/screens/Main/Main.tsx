import StyledButton from '@/components/StyledButton';
import StyledText from '@/components/StyledText';
import Setting from '@/screens/Setting';
import React from 'react';

const Main = () => {
  return (
    <>
      <StyledButton fullWidth>
        <StyledText>Hello</StyledText>
      </StyledButton>

      <Setting />
    </>
  );
};

export default Main;
