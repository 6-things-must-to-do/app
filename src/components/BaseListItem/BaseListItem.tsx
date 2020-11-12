import React, {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import useTheme from '@/hooks/useTheme';

export interface BaseListItemProps extends TouchableOpacityProps {
  children?: ReactNode;
  onPress?: () => void;
  height?: number;
  useMultiline?: boolean;
}

const BaseListItem = (props: BaseListItemProps) => {
  const {
    children,
    useMultiline = false,
    height = 64,
    onPress,
    ...touchableOpacityProps
  } = props;
  const theme = useTheme();

  return (
    <Wrapper
      height={height}
      useMultiline={useMultiline}
      borderColor={theme.secondary}
      onPress={onPress}
      {...touchableOpacityProps}>
      {children}
    </Wrapper>
  );
};

export default BaseListItem;

const Wrapper = styled.TouchableOpacity<{
  height: number;
  borderColor: string;
  useMultiline: boolean;
}>`
  ${(props) => `
  width: 100%;
  padding-vertical: 8px;
  margin-vertical: 4px;
  border-bottom-width: 1px;
  ${
    props.useMultiline
      ? `min-height: ${props.height}px;`
      : `height: ${props.height}px;`
  }
  border-bottom-color: ${props.borderColor}
  flex-direction: row;
`}
`;
