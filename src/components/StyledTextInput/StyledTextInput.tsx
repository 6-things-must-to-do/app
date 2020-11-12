import useTheme from '@/hooks/useTheme';
import {Style} from '@stmt/application';
import React from 'react';
import {StyleProp, TextInput, TextInputProps, TextStyle} from 'react-native';

export interface StyledTextInputProps extends TextInputProps {
  color?: keyof Style.TextTheme;
  fontSize?: number;
}

const StyledTextInput = (props: StyledTextInputProps) => {
  const {fontSize = 20, color = 'default', ...textInputProps} = props;
  const theme = useTheme();
  const defaultStyle: StyleProp<TextStyle> = {
    color: theme.text[color],
    fontSize,
    flex: 1,
    width: '100%'
  };

  const style = defaultStyle;

  return (
    <TextInput
      placeholderTextColor={theme.text.outfocus}
      autoCorrect={false}
      autoCapitalize="none"
      {...textInputProps}
      style={style}
    />
  );
};

export default StyledTextInput;
