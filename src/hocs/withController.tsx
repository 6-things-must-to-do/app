import {
  Controller,
  Control,
  FieldName,
  FieldValuesFromControl
} from 'react-hook-form';
import React from 'react';
import {TextInputProps} from 'react-native';
import {Data} from '@stmt/application';

interface WithControllerProps {
  control: Control<Data.Task>;
  defaultValue?: string | number;
  name: FieldName<FieldValuesFromControl<Control<Data.Task>>>;
}

export default function withController<T extends TextInputProps>(
  Component: React.FC<T>
): React.FC<T & WithControllerProps> {
  return (props: T & WithControllerProps) => {
    const {control, defaultValue, name, ...rest} = props;
    const componentProps = (rest as unknown) as T;

    return (
      <Controller
        defaultValue={defaultValue}
        control={control}
        name={name}
        render={({onChange, onBlur, value}) => (
          <Component
            onChangeText={(val) => onChange(val)}
            onBlur={onBlur}
            value={value}
            {...componentProps}
          />
        )}
      />
    );
  };
}
