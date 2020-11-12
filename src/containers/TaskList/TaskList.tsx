import Task from '@/components/Task';
import {DragEndParams} from 'react-native-draggable-flatlist';
import {Data, Record} from '@stmt/application';
import React from 'react';
import Animated from 'react-native-reanimated';
import Presenter from './Presenter';
import {useDispatch, useSelector} from 'react-redux';
import {RecordState, RootStore} from '@stmt/redux-store';
import {recordTaskAlign} from '@/redux/modules/record/actions';

export interface TaskListProps {
  editable: boolean;
}

const TaskList = (props: TaskListProps) => {
  const dispatch = useDispatch();
  const {tasks} = useSelector<RootStore, RecordState>((store) => store.record);

  const keyExtractor = (item: Data.Task | Record.NotFull, _index: number) =>
    `${item.index}`;

  const onDragEnd = (param: DragEndParams<Data.Task | Record.NotFull>) => {
    dispatch(recordTaskAlign(param.from, param.to));
  };

  const makeList = () => {
    const {editable} = props;
    const data: Array<Data.Task | Record.NotFull> = [...tasks];
    if (editable && data.length < 6) {
      const notFull: Record.NotFull = {notFull: true, index: -1};
      data.push(notFull);
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
