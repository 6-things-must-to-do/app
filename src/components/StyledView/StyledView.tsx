import useTheme from '@/hooks/useTheme';
import React, {ReactNode} from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import mergeStyle from '@/utils/mergeStyle';
import {Style} from '@stmt/application';

interface Props extends ViewProps {
  fullScreen?: boolean;
  minHeight?: number | string;
  minWidth?: number | string;
  bgColor?: keyof Style.DimensionTheme;
  useBorder?: boolean;
  borderColor?: keyof Style.DimensionTheme;
  children?: ReactNode;
}

const StyledView = (props: Props) => {
  const theme = useTheme();
  const {
    fullScreen = false,
    bgColor = 'primary',
    style: styleProps,
    useBorder = false,
    borderColor = 'secondary',
    minHeight,
    minWidth,
    ...viewProps
  } = props;

  const fullScreenStyle: StyleProp<ViewStyle> = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute'
  };

  const borderStyle: StyleProp<ViewStyle> = {
    borderColor: theme[borderColor],
    borderRadius: 16,
    borderStyle: 'solid',
    borderWidth: 1
  };

  const colorStyle: StyleProp<ViewStyle> = {
    backgroundColor: theme[bgColor],
    minWidth,
    minHeight
  };

  const defaultStyle = [colorStyle];
  const optionStyle = [];
  if (fullScreen) optionStyle.push(fullScreenStyle);
  if (useBorder) optionStyle.push(borderStyle);
  if (styleProps) optionStyle.push(styleProps);

  const style = mergeStyle(defaultStyle, optionStyle);

  return <View {...viewProps} style={style} />;
};

export default StyledView;
