import useTheme from '@/hooks/useTheme';
import {Style} from '@stmt/application';
import React, {ReactNode} from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

interface StyledTextProps extends TextProps {
  children?: ReactNode;
  color?: keyof Style.TextTheme;
  fontSize?: number;
}

const StyledText = (props: StyledTextProps) => {
  const {color = 'default', fontSize = 16, ...textProps} = props;
  const theme = useTheme();
  const style: StyleProp<TextStyle> = {
    fontSize,
    color: theme.text[color]
  };
  return <Text style={style} {...textProps} />;
};

export default StyledText;
