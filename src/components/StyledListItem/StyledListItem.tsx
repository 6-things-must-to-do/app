import useTheme from '@/hooks/useTheme';
import {Style} from '@stmt/application';
import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

interface Props extends TouchableOpacityProps {
  title: string;
  description?: string;
  titleColor?: keyof Style.TextTheme;
  descriptionColor?: keyof Style.TextTheme;
}

const StyledListItem = (props: Props) => {
  const {
    title,
    description = '',
    onPress,
    titleColor = 'default',
    descriptionColor = 'tint'
  } = props;

  const theme = useTheme();

  return (
    <Wrapper borderColor={theme.secondary} onPress={onPress}>
      <Title color={theme.text[titleColor]}>{title}</Title>
      {description ? (
        <Description color={theme.text[descriptionColor]}>
          {description}
        </Description>
      ) : null}
    </Wrapper>
  );
};

export default StyledListItem;

const Wrapper = styled.TouchableOpacity<{borderColor: string}>`
  ${(props) => `
  width: 100%;
  padding-vertical: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${props.borderColor}
`}
`;

const Title = styled.Text<{color: string}>`
  ${(props) => `
  color: ${props.color}
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: bold;
`}
`;

const Description = styled.Text<{color: string}>`
  ${(props) => `
    color: ${props.color};
    font-size: 14px;
`}
`;
