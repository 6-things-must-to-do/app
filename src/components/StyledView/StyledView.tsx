import useTheme from '@/hooks/useTheme';
import React, {ReactNode} from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import mergeStyle from '@/utils/mergeStyle';

interface Props extends ViewProps {
  fullScreen?: boolean;
  children?: ReactNode;
}

const StyledView = (props: Props) => {
  const theme = useTheme();
  const {fullScreen = false, style: styleProps, ...viewProps} = props;

  const fullScreenStyle: StyleProp<ViewStyle> = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute'
  };

  const colorStyle: StyleProp<ViewStyle> = {
    backgroundColor: theme.primary
  };

  const defaultStyle = [colorStyle];
  const optionStyle = [];
  if (fullScreen) optionStyle.push(fullScreenStyle);
  if (styleProps) optionStyle.push(styleProps);

  const style = mergeStyle(defaultStyle, optionStyle);

  return <View {...viewProps} style={style} />;
};

export default StyledView;
