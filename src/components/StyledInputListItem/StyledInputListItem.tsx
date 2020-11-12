import styled from 'styled-components/native';
import React, {ReactNode} from 'react';
import BaseListItem, {BaseListItemProps} from '../BaseListItem';
import StyledText from '../StyledText';
import StyledTextInput from '../StyledTextInput';
import {StyledTextInputProps} from '../StyledTextInput/StyledTextInput';

export interface StyledInputListItemProps extends StyledTextInputProps {
  label: ReactNode;
  baseListItemProps?: BaseListItemProps;
}

const StyledInputListItem = (props: StyledInputListItemProps) => {
  const {label, baseListItemProps, ...styledTextInputProps} = props;

  return (
    <BaseListItem disabled {...baseListItemProps}>
      <Label>
        <StyledText>{label}</StyledText>
      </Label>
      <Input>
        <StyledTextInput {...styledTextInputProps} />
      </Input>
    </BaseListItem>
  );
};

export default StyledInputListItem;

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
