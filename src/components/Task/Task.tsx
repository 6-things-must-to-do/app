import {Record, Style} from '@stmt/application';
import {RenderItemParams} from 'react-native-draggable-flatlist';
import React from 'react';
import Presenter from './Presenter';
import NotFull from './NotFull';

const Task = (props: RenderItemParams<Record.RecordData>) => {
  const {item, drag} = props;

  if ('notFull' in item) {
    return <NotFull onClickAdd={item.onClick} />;
  }

  const color: keyof Style.DimensionTheme = item.completedAt ? 'tint' : 'warn';

  return (
    <Presenter onClick={item.onClick} drag={drag} item={item} color={color} />
  );
};

export default Task;
