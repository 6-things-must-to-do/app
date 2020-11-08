import AlertTime from '@/components/AlertTime';
import LockTime from '@/components/LockTime';
import StyledList from '@/components/StyledList';
import StyledListItem from '@/components/StyledListItem';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import React, {useEffect} from 'react';

interface Props {
  onChangeAlert: (event: Event, date?: Date) => void;
  onClickMenu: (type: 'alert' | 'lock') => () => void;
  isOpenHourPicker: boolean;
  isOpenDatePicker: boolean;
  alertTime: Date;
}

export default (props: Props) => {
  const {onChangeAlert, alertTime, onClickMenu, isOpenDatePicker} = props;
  useEffect(() => {}, [isOpenDatePicker]);
  return (
    <StyledList>
      <StyledListItem
        title="Set alert time"
        description="Set task setting alert"
        onPress={onClickMenu('alert')}
        addOn={<AlertTime />}
      />
      <StyledListItem
        title="Set task lock time"
        description="Set how many hours to lock tasks"
        addOn={<LockTime />}
        onPress={onClickMenu('lock')}
      />
      {isOpenDatePicker ? (
        <DateTimePicker
          display="spinner"
          value={alertTime}
          mode="time"
          onChange={onChangeAlert}
        />
      ) : null}
    </StyledList>
  );
};
