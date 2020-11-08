import React, {ComponentProps} from 'react';
import {Data} from '@stmt/application';
import DraggableFlatList, {
  RenderItemParams
} from 'react-native-draggable-flatlist';

class DraggableTaskList extends DraggableFlatList<Data.Task> {}

interface Props extends ComponentProps<typeof DraggableTaskList> {
  data: Array<Data.Task>;
  renderItem: React.FC<RenderItemParams<Data.Task>>;
}

export default function (props: Props) {
  return <DraggableFlatList {...props} />;
}
