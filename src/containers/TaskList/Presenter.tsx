import React, {ComponentProps} from 'react';
import {Record} from '@stmt/application';
import DraggableFlatList, {
  RenderItemParams
} from 'react-native-draggable-flatlist';

class DraggableTaskList extends DraggableFlatList<Record.RecordData> {}

interface Props extends ComponentProps<typeof DraggableTaskList> {
  data: Array<Record.RecordData>;
  renderItem: React.FC<RenderItemParams<Record.RecordData>>;
}

export default function (props: Props) {
  return <DraggableFlatList {...props} />;
}
