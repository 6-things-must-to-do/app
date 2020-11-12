import useTheme from '@/hooks/useTheme';
import {Data} from '@stmt/application';
import React, {ComponentProps} from 'react';
import BouncyCheckBox from 'react-native-bouncy-checkbox';

interface Props extends ComponentProps<typeof BouncyCheckBox> {
  todo?: Data.Todo;
}

const Todo = (props: Props) => {
  const {todo, ...bouncyCheckboxProps} = props;
  const theme = useTheme();
  return (
    <BouncyCheckBox
      fillColor={theme.text.success}
      fontSize={20}
      borderColor={theme.text.success}
      color={theme.text.default}
      isChecked={todo?.isCompleted}
      text={todo?.content}
      {...bouncyCheckboxProps}
    />
  );
};

export default Todo;
