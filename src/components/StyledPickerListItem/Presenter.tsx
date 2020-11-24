import React, {ComponentProps} from 'react';
import BaseLabel from '../BaseLabel';
import RNPickerSelect, {PickerStyle} from 'react-native-picker-select';
import StyledText from '../StyledText';
import useTheme from '@/hooks/useTheme';

interface Props
  extends Omit<ComponentProps<typeof RNPickerSelect>, 'placeholder'> {
  value: number;
  label: string;
  onDonePress: () => void;
  placeholder?: string;
  fontSize?: number;
}

export default (props: Props) => {
  const {
    label,
    fontSize = 20,
    placeholder = 'Select an item...',
    value,
    ...pickerSelectProps
  } = props;
  const theme = useTheme();

  const style: PickerStyle = {
    inputIOS: {color: theme.text.default, fontSize},
    inputAndroid: {color: theme.text.default, fontSize},
    placeholder: {color: theme.text.outfocus}
  };

  return (
    <BaseLabel label={<StyledText>{label}</StyledText>}>
      {/* <StyledText fontSize={fontSize}> */}
      <RNPickerSelect
        placeholder={{
          inputLabel: placeholder,
          label: placeholder,
          key: placeholder
        }}
        style={style}
        value={value}
        {...pickerSelectProps}
      />
      {/* </StyledText> */}
    </BaseLabel>
  );
};
