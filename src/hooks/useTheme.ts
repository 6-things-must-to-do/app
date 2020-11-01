import {Style} from '@stmt/application';
import {useContext} from 'react';
import {ThemeContext} from 'styled-components';

function useTheme(): Style.STMTTheme {
  const theme = useContext<Style.STMTTheme>(ThemeContext);
  return theme;
}

export default useTheme;
