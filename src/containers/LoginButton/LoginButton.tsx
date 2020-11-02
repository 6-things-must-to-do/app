import StyledButton from '@/components/StyledButton';
import StyledText from '@/components/StyledText';
import React from 'react';
import {View} from 'react-native';

const LoginButton = () => {
  return (
    <View>
      <StyledButton>
        <StyledText>Google</StyledText>
      </StyledButton>
    </View>
  );
};

export default LoginButton;
