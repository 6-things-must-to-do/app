import React from 'react';
import * as Progress from 'react-native-progress';
import useTheme from '@/hooks/useTheme';

interface Props {
  size?: number;
}

const Loading = (props: Props) => {
  const {size = 64} = props;
  const theme = useTheme();
  return <Progress.CircleSnail size={size} color={[theme.tint, theme.warn]} />;
};

export default Loading;
