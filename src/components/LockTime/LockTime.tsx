import {appSetLockHours} from '@/redux/modules/appSetting/actions';
import {AppSettingState, RootStore} from '@stmt/redux-store';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Picker, {PickerSelectProps} from 'react-native-picker-select';
import useTheme from '@/hooks/useTheme';
import {Platform} from 'react-native';

const LockTime = () => {
  const {lock} = useSelector<RootStore, AppSettingState>(
    (store) => store.appSetting
  );

  const [selected, setSelected] = useState(lock);

  useEffect(() => {}, [lock]);

  const dispatch = useDispatch();

  const theme = useTheme();

  const onValueChange = (itemValue: number) => {
    if (itemValue === null) return;

    if (Platform.OS === 'android') {
      setSelected(itemValue);
      updateLockTime(itemValue);
    } else {
      setSelected(itemValue);
    }
  };

  const onDonePress = () => {
    updateLockTime(selected);
  };

  const updateLockTime = (h: number) => {
    dispatch(appSetLockHours(h));
  };

  const candidatesFactory = () => {
    const candidates: Array<{label: string; value: number}> = new Array(12)
      .fill(true)
      .map((_, index) => ({value: index + 1, label: `${index + 1} Hours`}));

    candidates[0].label = `1 Hour`;

    return candidates;
  };

  const candidates = candidatesFactory();

  const pickerSelectProps: PickerSelectProps = {
    value: selected,
    onValueChange,
    onDonePress,
    items: candidates,
    style: {
      inputIOS: {color: theme.text.default, fontSize: 16},
      inputIOSContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      inputAndroid: {color: theme.text.default},
      inputAndroidContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    pickerProps: {
      mode: 'dropdown'
    }
  };

  return <Picker {...pickerSelectProps} />;
};

export default LockTime;
