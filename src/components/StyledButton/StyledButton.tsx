import useTheme from '@/hooks/useTheme';
import getShadowOption from '@/utils/getShadowOption';
import mergeStyle from '@/utils/mergeStyle';
import React, {ReactNode} from 'react';
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

interface Props extends TouchableOpacityProps {
  children?: ReactNode;
  minWidth?: number;
  fullWidth?: boolean;
  shadowElevation?: number;
}

const StyledButton = (props: Props) => {
  const theme = useTheme();
  const {
    minWidth = 96,
    fullWidth = false,
    shadowElevation = 5,
    children,
    style: styleProps,
    ...touchableOpacityProps
  } = props;

  const shadowStyle = getShadowOption(shadowElevation);

  const defaultStyle: StyleProp<ViewStyle> = {
    borderColor: theme.tint,
    backgroundColor: theme.card,
    padding: 16,
    borderRadius: 16,
    minWidth,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    ...shadowStyle
  };

  if (fullWidth) defaultStyle.width = '100%';

  let style = defaultStyle;
  if (styleProps) style = mergeStyle([defaultStyle], [styleProps]);

  return (
    <TouchableOpacity {...touchableOpacityProps} style={style}>
      {children}
    </TouchableOpacity>
  );
};

export default StyledButton;
