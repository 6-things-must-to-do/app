import {
  DefaultTheme,
  NavigationContainer,
  Theme
} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import * as R from 'ramda';
import {useDarkMode} from 'react-native-dynamic';
import useTheme from '@/hooks/useTheme';

interface Props {
  children: ReactNode;
}

const NavigationTheme = (props: Props) => {
  const {children} = props;
  const isDarkMode = useDarkMode();
  const theme = useTheme();
  const navigationTheme: Theme = {
    dark: isDarkMode,
    colors: {
      primary: theme.secondary,
      background: theme.primary,
      card: theme.card,
      text: theme.text.default,
      border: theme.secondary,
      notification: theme.warn
    }
  };

  return (
    <NavigationContainer
      theme={R.mergeDeepRight(DefaultTheme, navigationTheme)}>
      {children}
    </NavigationContainer>
  );
};

export default NavigationTheme;
