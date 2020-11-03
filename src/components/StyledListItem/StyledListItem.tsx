import useTheme from '@/hooks/useTheme';
import {Style} from '@stmt/application';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
  description?: string;
  titleColor?: keyof Style.TextTheme;
  descriptionColor?: keyof Style.TextTheme;
  onPress: () => void;
}

const StyledListItem = (props: Props) => {
  const {
    title,
    description,
    onPress,
    titleColor = 'default',
    descriptionColor = 'outfocus'
  } = props;

  const theme = useTheme();

  return (
    <Wrapper onPress={onPress}>
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

const Wrapper = styled.TouchableOpacity`
  width: 100%;
`;

const Title = styled.Text<{color: string}>`
  ${(props) => `
  color: ${props.color}
  font-size: 16;
  font-weight: bold;
`}
`;

const Description = styled.Text<{color: string}>`
  ${(props) => `
    color: ${props.color};
    font-size: 8;
    font-weight: bold;
`}
`;

/*
  interface Props extends TextProps {
    color?: keyof Style.TextTheme;
    fontSize?: number;
};

const StyledListItem = (props: Props) => {
    const {color = 'default', fontSize = 16, ...textProps} = props;

    const theme = useTheme();

    const style: StyleProp<TextStyle> = {
        fontSize,
        color: theme.text[color]
    };

    return <Text {...textProps} style={style} />;
};
*/
