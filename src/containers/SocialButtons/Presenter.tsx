import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useTheme from '@/hooks/useTheme';
import {TouchableOpacity} from 'react-native';

interface ClickButtonProps {
  onClick: () => void;
}

export default (props: ClickButtonProps) => {
  const {onClick} = props;
  const theme = useTheme();

  const color = theme.primary;
  const name = 'adduser';

  return (
    <TouchableOpacity onPress={onClick}>
      <AntDesign color={color} size={32} name={name} />
    </TouchableOpacity>
  );
};
