import useTheme from '@/hooks/useTheme';
import {Style} from '@stmt/application';
import React, {ReactNode} from 'react';
import {ScrollViewProps, StyleProp, ViewStyle, ScrollView} from 'react-native';

interface Props extends ScrollViewProps {
  children?: ReactNode;
  fullWidth?: boolean;
  width?: number;
  height?: number;
  border?: keyof Style.TextTheme;
}

const StyledList = (props: Props) => {
  const {fullWidth = false, width = 96, children, ...scrollViewProps} = props;

  const theme = useTheme();

  const style: StyleProp<ViewStyle> = {
    borderColor: theme.primary,
    backgroundColor: theme.card,
    width: fullWidth ? '100%' : width,
    borderBottomColor: 'black',
    borderLeftColor: 'black',
    borderRightColor: 'black',
    borderTopColor: 'black',
    borderWidth: 1
  };

  return (
    <ScrollView {...scrollViewProps} style={style}>
      {children}
    </ScrollView>
  );
};

export default StyledList;
