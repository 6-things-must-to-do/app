import StyledButton from '@/components/StyledButton';
import StyledText from '@/components/StyledText';
import {globalSetError} from '@/redux/modules/global/actions';
import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(globalSetError(new Error('Message')));
  };

  return (
    <View style={{flex: 1}}>
      <StyledButton onPress={onPress}>
        <StyledText>Hello</StyledText>
      </StyledButton>
    </View>
  );
};

export default Main;
