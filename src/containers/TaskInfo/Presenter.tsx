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
import {StyledTimePickListItemWithController} from '@/components/StyledTimePickListItem/StyledTimePickListItem';
import {StyledPickerListItemWithController} from '@/components/StyledPickerListItem/StyledPickerListItem';
import {Item} from 'react-native-picker-select';

interface Props {
  isFolded: boolean;
  editable: boolean;
  control: Control<Data.Task>;
  task: Data.Task;
  onToggleDetail: () => void;
}

export default (props: Props) => {
  const {isFolded, onToggleDetail, control, task, editable} = props;
  const iconName = !isFolded ? 'expand-less' : 'expand-more';
  const theme = useTheme();

  const estimatedMinutesItems: Array<Item> = [...new Array(12)].map(
    (_, index) => {
      const value = (index + 1) * 15;

      if (index < 3) return {label: `${value} minutes`, value};

      if (index === 3) return {label: '1 hour', value};

      if (index < 7) return {label: `1 hour ${value - 60} minutes`, value};

      if (index === 7) return {label: '2 hours', value};

      if (index < 11) return {label: `2 hours ${value - 120} minutes`, value};

      if (index === 11) return {label: '3 hours', value};

      return {label: `${value} minutes`, value};
    }
  );

  return (
    <>
      <Controller
        control={control}
        render={({onBlur, onChange, value}) => (
          <StyledInputListItem
            editable={editable}
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
          editable={editable}
          control={control}
          name="where"
          label="Where 📍"
          placeholder="Where you do this task"
          defaultValue={task.where || ''}
        />
        <StyledInputListItemWithController
          editable={editable}
          control={control}
          name="with"
          label="With 👥"
          placeholder="People who are in this task"
          defaultValue={task.with || ''}
        />
        <StyledTimePickListItemWithController
          defaultValue={task.willStartAt || null}
          disabled={!editable}
          mode="datetime"
          control={control}
          placeholder="When will you start this task"
          name="willStartAt"
          label="When ⏰"
        />
        <StyledPickerListItemWithController
          disabled={!editable}
          items={estimatedMinutesItems}
          label="Estimated minutes ⏳"
          control={control}
          defaultValue={task.estimatedMinutes || null}
          name="estimatedMinutes"
        />
        <StyledInputListItemWithController
          editable={editable}
          baseLabelProps={{height: 88}}
          multiline
          label="Memo 📝"
          placeholder="Any record about this task"
          control={control}
          name="memo"
          defaultValue={task.memo || ''}
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
