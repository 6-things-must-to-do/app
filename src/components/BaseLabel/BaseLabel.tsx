import styled from 'styled-components/native';
import React, {ReactNode} from 'react';
import BaseListItem, {BaseListItemProps} from '../BaseListItem';

export interface BaseLabelProps extends BaseListItemProps {
  label: ReactNode;
  children?: ReactNode;
}

const BaseLabel = (props: BaseLabelProps) => {
  const {label, children, ...baseListItemProps} = props;

  return (
    <BaseListItem {...baseListItemProps}>
      <Label>{label}</Label>
      <Input>{children}</Input>
    </BaseListItem>
  );
};

export default BaseLabel;

const ListContent = styled.View`
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const Label = styled(ListContent)`
  flex: 1.5;
`;

const Input = styled(ListContent)`
  flex: 4;
`;
