import {unixToCalendar, unixToDate} from '@/utils/date';
import React, {ReactNode} from 'react';
import DateTimePickerModal, {
  ReactNativeModalDateTimePickerProps
} from 'react-native-modal-datetime-picker';
import BaseLabel from '../BaseLabel';
import StyledText from '../StyledText';

interface Props extends Omit<ReactNativeModalDateTimePickerProps, 'date'> {
  value?: number;
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

  const date = value ? unixToDate(value) : undefined;

  return (
    <BaseLabel onPress={onClickItem} label={<StyledText>{label}</StyledText>}>
      {value ? (
        <StyledText fontSize={fontSize}>{unixToCalendar(value)}</StyledText>
      ) : (
        <StyledText fontSize={fontSize} color="outfocus">
          {placeholder}
        </StyledText>
      )}
      <DateTimePickerModal
        mode="datetime"
        {...dateTimePickerProps}
        date={date}
      />
    </BaseLabel>
  );
};
