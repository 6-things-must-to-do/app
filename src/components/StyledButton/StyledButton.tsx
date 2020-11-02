import useTheme from '@/hooks/useTheme';
import getShadowOption from '@/utils/getShadowOption';
import React, {ReactNode} from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle
} from 'react-native';

interface Props extends TouchableOpacityProps {
  children?: ReactNode;
  height?: number;
  width?: number;
  fullWidth?: boolean;
  shadowElevation?: number;
}

const StyledButton = (props: Props) => {
  const theme = useTheme();
  const {
    height = 48,
    width = 96,
    fullWidth = false,
    shadowElevation = 24,
    ...touchableOpacityProps
  } = props;

  const shadowStyle = getShadowOption(shadowElevation);

  const style: StyleProp<ViewStyle> = {
    borderColor: theme.tint,
    backgroundColor: theme.card,
    borderRadius: 10,
    width: fullWidth ? '100%' : width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadowStyle
  };

  return <TouchableOpacity {...touchableOpacityProps} style={style} />;
};

export default StyledButton;
