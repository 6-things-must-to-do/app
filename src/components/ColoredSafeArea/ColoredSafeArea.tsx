import {ThemeContext} from 'styled-components/native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import {Style} from '@stmt/application';

const ColoredSafeArea = () => {
  const theme = useContext<Style.STMTTheme>(ThemeContext);
  const style = {backgroundColor: theme.card};
  return <SafeAreaView style={style} />;
};

export default ColoredSafeArea;
