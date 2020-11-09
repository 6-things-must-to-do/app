import React, {ComponentProps} from 'react';
import {Data, Record} from '@stmt/application';
import DraggableFlatList, {
  RenderItemParams
} from 'react-native-draggable-flatlist';

class DraggableTaskList extends DraggableFlatList<Data.Task | Record.NoTask> {}

interface Props extends ComponentProps<typeof DraggableTaskList> {
  data: Array<Data.Task | Record.NoTask>;
  renderItem: React.FC<RenderItemParams<Data.Task | Record.NoTask>>;
}

export default function (props: Props) {
  return <DraggableFlatList {...props} />;
}
