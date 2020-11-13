import {unixToCalendar} from '@/utils/date';
import React, {ReactNode} from 'react';
import DateTimePickerModal, {
  ReactNativeModalDateTimePickerProps
} from 'react-native-modal-datetime-picker';
import BaseLabel from '../BaseLabel';
import StyledText from '../StyledText';

interface Props extends Omit<ReactNativeModalDateTimePickerProps, 'date'> {
  value?: Date;
  label: ReactNode;
  fontSize?: number;
  placeholder?: string;
  onClickItem: () => void;
}

export default (props: Props) => {
  const {
    value,
    label,
    fontSize = 20,
    onClickItem,
    placeholder,
    ...dateTimePickerProps
  } = props;

  return (
    <BaseLabel onPress={onClickItem} label={<StyledText>{label}</StyledText>}>
      {value ? (
        <StyledText fontSize={fontSize}>
          {unixToCalendar(value.getTime())}
        </StyledText>
      ) : (
        <StyledText fontSize={fontSize} color="outfocus">
          {placeholder}
        </StyledText>
      )}
      <DateTimePickerModal
        mode="datetime"
        {...dateTimePickerProps}
        date={value}
      />
    </BaseLabel>
  );
};
