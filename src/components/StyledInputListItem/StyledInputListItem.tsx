import React from 'react';
import BaseLabel, {BaseLabelProps} from '../BaseLabel';
import StyledText from '../StyledText';
import StyledTextInput from '../StyledTextInput';
import {StyledTextInputProps} from '../StyledTextInput/StyledTextInput';
import withController from '@/hocs/withController';

type RequiredBaseLabel = Omit<BaseLabelProps, 'label'>;

export interface StyledInputListItemProps extends StyledTextInputProps {
  label: string;
  baseLabelProps?: RequiredBaseLabel;
}

const StyledInputListItem = (props: StyledInputListItemProps) => {
  const {label, baseLabelProps, ...styledTextInputProps} = props;

  return (
    <BaseLabel
      label={<StyledText>{label}</StyledText>}
      disabled
      {...baseLabelProps}>
      <StyledTextInput {...styledTextInputProps} />
    </BaseLabel>
  );
};

export default StyledInputListItem;

export const StyledInputListItemWithController = withController(
  StyledInputListItem
);
