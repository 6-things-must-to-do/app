import {Style, TaskList} from '@stmt/application';
import {RenderItemParams} from 'react-native-draggable-flatlist';
import React from 'react';
import Presenter from './Presenter';

interface Props extends RenderItemParams<TaskList.Task> {
  draggable: boolean;
}

const Task = (props: Props) => {
  const {item, drag, draggable} = props;
  const color: keyof Style.DimensionTheme = item.completedAt ? 'tint' : 'warn';

  return (
    <Presenter
      onClick={item.onClick}
      onClickComplete={item.onClickComplete}
      drag={drag}
      draggable={draggable}
      item={item}
      color={color}
    />
  );
};

export default Task;
