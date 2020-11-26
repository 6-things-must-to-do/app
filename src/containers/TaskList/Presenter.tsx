import React, {ComponentProps} from 'react';
import DraggableFlatList, {
  RenderItemParams
} from 'react-native-draggable-flatlist';
import StyledButton from '@/components/StyledButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StyledView from '@/components/StyledView';
import useTheme from '@/hooks/useTheme';
import {TaskList} from '@stmt/application';

class DraggableTaskList extends DraggableFlatList<TaskList.Task> {}

interface Props extends ComponentProps<typeof DraggableTaskList> {
  data: Array<TaskList.Task>;
  renderItem: React.FC<RenderItemParams<TaskList.Task>>;
  onClickAdd: () => void;
  useAddButton: boolean;
}

export default function (props: Props) {
  const {useAddButton, onClickAdd} = props;
  const theme = useTheme();
  return (
    <>
      <DraggableFlatList {...props} />
      {useAddButton ? (
        <StyledView useBorder>
          <StyledButton fullWidth onPress={onClickAdd}>
            <MaterialCommunityIcons
              name="plus"
              size={32}
              color={theme.secondary}
            />
          </StyledButton>
        </StyledView>
      ) : null}
    </>
  );
}
