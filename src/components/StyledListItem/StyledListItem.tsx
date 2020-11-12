import useTheme from '@/hooks/useTheme';
import {Style} from '@stmt/application';
import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import BaseListItem, {BaseListItemProps} from '../BaseListItem';

interface Props extends BaseListItemProps {
  title: string;
  description?: string;
  titleColor?: keyof Style.TextTheme;
  descriptionColor?: keyof Style.TextTheme;
  addOn?: ReactNode;
}

const StyledListItem = (props: Props) => {
  const {
    title,
    description = '',
    titleColor = 'default',
    descriptionColor = 'tint',
    addOn,
    ...baseListItemProps
  } = props;

  const theme = useTheme();

  return (
    <BaseListItem {...baseListItemProps}>
      <TextBox>
        <Title color={theme.text[titleColor]}>{title}</Title>
        {description ? (
          <Description color={theme.text[descriptionColor]}>
            {description}
          </Description>
        ) : null}
      </TextBox>
      {addOn ? <AddOnBox>{addOn}</AddOnBox> : null}
    </BaseListItem>
  );
};

export default StyledListItem;

const TextBox = styled.View`
  flex: 3;
`;

const AddOnBox = styled.View`
  flex: 1.5;
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
