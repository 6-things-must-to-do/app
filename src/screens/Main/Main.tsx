import StyledButton from '@/components/StyledButton';
import StyledText from '@/components/StyledText';
import React from 'react';
import {View} from 'react-native';

const Main = () => {
  return (
    <View style={{flex: 1}}>
      <StyledButton>
        <StyledText>Hello</StyledText>
      </StyledButton>
    </View>
  );
};

export default Main;
