import {Data, Record, Style} from '@stmt/application';
import {RenderItemParams} from 'react-native-draggable-flatlist';
import React from 'react';
import Presenter, {NoTask} from './Presenter';

const Task = (props: RenderItemParams<Data.Task | Record.NoTask>) => {
  const {item, drag} = props;

  if ('noTask' in item) {
    return <NoTask />;
  }

  const color: keyof Style.DimensionTheme = item.completedAt ? 'tint' : 'warn';

  return <Presenter drag={drag} item={item} color={color} />;
};

export default Task;
