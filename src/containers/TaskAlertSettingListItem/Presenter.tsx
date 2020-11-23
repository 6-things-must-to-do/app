import AlertTime from '@/components/AlertTime';
import React from 'react';
import StyledListItem from '@/components/StyledListItem';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface Props {
  onClick: () => void;
  onCancel: () => void;
  onConfirm: (date?: Date) => void;
  isPickerOpen: boolean;
  pickerValue: Date;
}

export default (props: Props) => {
  const {onClick, onConfirm, onCancel, isPickerOpen, pickerValue} = props;
  return (
    <>
      <StyledListItem
        title="Set alert time"
        description="Set task setting alert"
        onPress={onClick}
        addOn={<AlertTime />}
      />
      <DateTimePickerModal
        date={pickerValue}
        display="spinner"
        isVisible={isPickerOpen}
        onCancel={onCancel}
        mode="time"
        minuteInterval={5}
        onConfirm={onConfirm}
      />
    </>
  );
};
