import AlertTime from '@/components/AlertTime';
import React from 'react';
import StyledListItem from '@/components/StyledListItem';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';

interface Props {
  onClick: () => void;
  onChangeAlert: (event: Event, date?: Date) => void;
  isPickerOpen: boolean;
  pickerValue: Date;
}

export default (props: Props) => {
  const {onClick, onChangeAlert, isPickerOpen, pickerValue} = props;
  return (
    <>
      <StyledListItem
        title="Set alert time"
        description="Set task setting alert"
        onPress={onClick}
        addOn={<AlertTime />}
      />
      {isPickerOpen ? (
        <DateTimePicker
          display="spinner"
          value={pickerValue}
          mode="time"
          minuteInterval={5}
          onChange={onChangeAlert}
        />
      ) : null}
    </>
  );
};
