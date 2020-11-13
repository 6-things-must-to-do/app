import {Data} from '@stmt/application';
import React, {ComponentProps, useState} from 'react';
import {Control, Controller} from 'react-hook-form';
import Presenter from './Presenter';

interface Props
  extends Omit<
    ComponentProps<typeof Presenter>,
    'isVisible' | 'onCancel' | 'onConfirm' | 'onClickItem' | 'onChange'
  > {
  onConfirm?: (...event: Array<any>) => void;
  placeholder?: string;
}

const StyledTimePickListItem = (props: Props) => {
  const {onConfirm, ...others} = props;
  const [isVisible, setIsVisible] = useState(false);

  const onClickConfirm = (e: any) => {
    if (onConfirm) {
      onConfirm(e);
    }
    setIsVisible(false);
  };

  const onClickCancel = () => {
    setIsVisible(false);
  };

  const onClickItem = () => {
    setIsVisible(true);
  };

  return (
    <Presenter
      onClickItem={onClickItem}
      onCancel={onClickCancel}
      onConfirm={onClickConfirm}
      isVisible={isVisible}
      {...others}
    />
  );
};

export default StyledTimePickListItem;

interface WithControllerProps extends Omit<Props, 'onConfirm' | 'value'> {
  name: keyof Data.Task;
  control: Control<Data.Task>;
}

export const StyledTimePickListItemWithController = (
  props: WithControllerProps
) => {
  const {control, name, ...styledTimePickerProps} = props;
  return (
    <Controller
      render={({onChange, value}) => (
        <StyledTimePickListItem
          {...styledTimePickerProps}
          value={value}
          onConfirm={onChange}
        />
      )}
      defaultValue={null}
      control={control}
      name={name}
    />
  );
};
