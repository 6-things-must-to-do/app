import {Data, Style} from '@stmt/application';
import {RenderItemParams} from 'react-native-draggable-flatlist';
import React from 'react';
import Presenter from './Presenter';

const Task = (props: RenderItemParams<Data.Task>) => {
  const {item, drag} = props;

  const color: keyof Style.DimensionTheme = item.completedAt ? 'tint' : 'warn';

  return <Presenter drag={drag} item={item} color={color} />;
};

export default Task;
