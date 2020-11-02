import useTheme from '@/hooks/useTheme';
import mergeStyle from '@/utils/mergeStyle';
import {Style} from '@stmt/application';
import React, {ReactNode} from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

interface StyledTextProps extends TextProps {
  children?: ReactNode;
  color?: keyof Style.TextTheme;
  fontSize?: number;
}

const StyledText = (props: StyledTextProps) => {
  const {
    color = 'default',
    fontSize = 16,
    style: styleProps,
    ...textProps
  } = props;

  const theme = useTheme();
  const defaultStyle: StyleProp<TextStyle> = {
    fontSize,
    color: theme.text[color]
  };

  const style = styleProps
    ? mergeStyle([defaultStyle], [styleProps])
    : defaultStyle;

  return <Text style={style} {...textProps} />;
};

export default StyledText;
