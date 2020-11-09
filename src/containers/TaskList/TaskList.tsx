import Task from '@/components/Task';
import {DragEndParams} from 'react-native-draggable-flatlist';
import {Data, Record} from '@stmt/application';
import React from 'react';
import Animated from 'react-native-reanimated';
import Presenter from './Presenter';
import {useDispatch, useSelector} from 'react-redux';
import {RecordState, RootStore} from '@stmt/redux-store';
import {recordTaskAlign} from '@/redux/modules/record/actions';

const TaskList = () => {
  const dispatch = useDispatch();
  const {tasks} = useSelector<RootStore, RecordState>((store) => store.record);

  const keyExtractor = (item: Data.Task | Record.NoTask, _index: number) =>
    `${item.index}`;

  const onDragEnd = (param: DragEndParams<Data.Task | Record.NoTask>) => {
    dispatch(recordTaskAlign(param.from, param.to));
  };

  const makeList = () => {
    const data: Array<Data.Task | Record.NoTask> = [...tasks];
    if (!data.length) {
      const noTask: Record.NoTask = {noTask: true, index: -1};
      data.push(noTask);
    }
    return data;
  };

  const data = makeList();

  return (
    <Presenter
      onDragEnd={onDragEnd}
      data={data}
      renderItem={Task}
      keyExtractor={keyExtractor}
      dragItemOverflow={false}
      animationConfig={{} as Animated.SpringConfig}
    />
  );
};

export default TaskList;
