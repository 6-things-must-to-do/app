import React, {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components';
import * as COLORS from '@/constants/colors';
import {Style} from '@stmt/application';
import {useDarkMode} from 'react-native-dynamic';

interface Props {
  children: ReactNode;
}

const GlobalTheme = (props: Props) => {
  const {children} = props;
  const isDarkMode = useDarkMode();
  const mode = isDarkMode ? 'dark' : 'light';

  const styleTheme: {[key in Style.Mode]: Style.STMTTheme} = {
    dark: {
      primary: COLORS.MAIN_BLACK,
      secondary: COLORS.MAIN_TURQUOISE,
      tint: COLORS.MAIN_GREEN,
      warn: COLORS.SUB_RED,
      card: COLORS.SUB_BLACK,
      outfocus: COLORS.MAIN_GREY,
      text: {
        default: COLORS.SUB_WHITE,
        warn: COLORS.SUB_RED,
        success: COLORS.MAIN_GREEN,
        tint: COLORS.MAIN_GREEN,
        outfocus: COLORS.MAIN_GREY,
      },
    },
    light: {
      primary: COLORS.SUB_WHITE,
      secondary: COLORS.MAIN_GREEN,
      tint: COLORS.MAIN_TURQUOISE,
      warn: COLORS.SUB_RED,
      card: COLORS.SUB_WHITE,
      outfocus: COLORS.MAIN_GREY,
      text: {
        default: COLORS.SUB_BLACK,
        warn: COLORS.SUB_RED,
        success: COLORS.MAIN_GREEN,
        tint: COLORS.MAIN_TURQUOISE,
        outfocus: COLORS.MAIN_GREY,
      },
    },
  };

  const currentTheme = styleTheme[mode];

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default GlobalTheme;
