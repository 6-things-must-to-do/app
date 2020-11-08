import React from 'react';
import {Picker as P} from '@react-native-picker/picker';
import useTheme from '@/hooks/useTheme';

export interface PickerItem<T extends string | number> {
  label: string;
  value: T;
}

export interface PickerProps<T extends string | number> {
  selected: T;
  items: Array<PickerItem<T>>;
  onValueChange: (itemValue: React.ReactText, itemIndex: number) => void;
}

export default function Picker<T extends string | number>(
  props: PickerProps<T>
) {
  const {selected, items, onValueChange} = props;
  const theme = useTheme();

  return (
    <P
      dropdownIconColor={theme.secondary}
      style={{color: theme.text.default}}
      itemStyle={{backgroundColor: theme.card, color: theme.text.default}}
      mode="dropdown"
      selectedValue={selected}
      onValueChange={onValueChange}>
      {items.map((i) => (
        <P.Item label={i.label} value={i.value} key={i.value} />
      ))}
    </P>
  );
}
