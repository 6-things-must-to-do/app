import StyledInputListItem, {
  StyledInputListItemWithController
} from '@/components/StyledInputListItem';
import StyledText from '@/components/StyledText';
import useTheme from '@/hooks/useTheme';
import {Control, Controller} from 'react-hook-form';
import React from 'react';
import Collapsible from 'react-native-collapsible';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import {Data} from '@stmt/application';

interface Props {
  isFolded: boolean;
  control: Control<Data.Task>;
  task: Data.Task;
  onToggleDetail: () => void;
}

export default (props: Props) => {
  const {isFolded, onToggleDetail, control, task} = props;
  const iconName = !isFolded ? 'expand-less' : 'expand-more';
  const theme = useTheme();

  return (
    <>
      <Controller
        control={control}
        render={({onBlur, onChange, value}) => (
          <StyledInputListItem
            label="What 🎯"
            value={value}
            onBlur={onBlur}
            onChangeText={(val) => onChange(val)}
            placeholder="Title of your task"
          />
        )}
        name="title"
        rules={{required: true}}
        defaultValue={task.title}
      />
      <Collapsible collapsed={isFolded}>
        <StyledInputListItemWithController
          control={control}
          name="where"
          label="Where 📍"
          placeholder="Where you do this task"
          defaultValue={task.where}
        />
        <StyledInputListItemWithController
          control={control}
          name="willStartAt"
          label="When ⏰"
          placeholder="When will you start this task"
          defaultValue={task.willStartAt?.toString()}
        />
        <StyledInputListItemWithController
          control={control}
          name="with"
          label="With 👥"
          placeholder="People who are in this task"
          defaultValue={task.with}
        />
        <StyledInputListItemWithController
          baseListItemProps={{height: 88}}
          multiline
          label="Memo 📝"
          placeholder="Any record about this task"
          control={control}
          name="memo"
          defaultValue={task.memo}
        />
      </Collapsible>
      <Detail onPress={onToggleDetail}>
        <StyledText color="tint">More Detail </StyledText>
        <MaterialIcons name={iconName} size={16} color={theme.text.tint} />
      </Detail>
    </>
  );
};

const Detail = styled.TouchableOpacity`
  width: 100%;
  justify-content: flex-end;
  flex-direction: row;
`;
