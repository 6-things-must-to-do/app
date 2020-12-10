import {Data} from '@stmt/application';
import React, {ComponentProps, useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import Presenter from './Presenter';

interface Props
  extends Omit<
    ComponentProps<typeof Presenter>,
    'onDonePress' | 'onClose' | 'isVisible' | 'onPressLabel' | 'onValueChange'
  > {
  onChange?: (...event: Array<any>) => void;
}

const StyledPickerListItem = (props: Props) => {
  const {onChange, value, ...others} = props;
  const [item, setItem] = useState(value);

  const onValueChange = (minutes: number) => {
    if (Platform.OS === 'android' && onChange) {
      onChange(minutes);
    } else {
      setItem(item);
    }
  };

  const onDonePress = () => {
    if (onChange) onChange(item);
  };

  useEffect(() => {}, [value]);

  return (
    <Presenter
      onValueChange={onValueChange}
      onDonePress={onDonePress}
      value={value}
      {...others}
    />
  );
};

export default StyledPickerListItem;

interface WithControllerProps extends Omit<Props, 'value' | 'onChange'> {
  control: Control<Data.Task>;
  name: keyof Data.Task;
  defaultValue: number | null;
}

export const StyledPickerListItemWithController = (
  props: WithControllerProps
) => {
  const {control, name, defaultValue, ...styledPickerListItemProps} = props;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({onChange, value}) => (
        <StyledPickerListItem
          {...styledPickerListItemProps}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};
