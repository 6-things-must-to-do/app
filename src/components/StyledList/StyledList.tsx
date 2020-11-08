import mergeStyle from '@/utils/mergeStyle';
import {Style} from '@stmt/application';
import styled from 'styled-components/native';
import React, {ReactNode} from 'react';
import {ScrollViewProps, StyleProp, ViewStyle, ScrollView} from 'react-native';

interface Props extends ScrollViewProps {
  children?: ReactNode;
  fullWidth?: boolean;
  width?: number;
  border?: keyof Style.TextTheme;
}

const StyledList = (props: Props) => {
  const {
    fullWidth = true,
    width = '90%',
    children,
    style: styleProps,
    ...scrollViewProps
  } = props;

  const defaultStyle: StyleProp<ViewStyle> = {
    width: fullWidth ? '100%' : width
  };

  let style = defaultStyle;
  if (styleProps) style = mergeStyle([defaultStyle], [styleProps]);

  return (
    <Wrapper>
      <ScrollView {...scrollViewProps} style={style}>
        {children}
      </ScrollView>
    </Wrapper>
  );
};

export default StyledList;

const Wrapper = styled.View`
  width: 100%;
  padding: 16px;
  flex: 1;
`;
