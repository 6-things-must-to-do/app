import Task from '@/components/Task';
import {DragEndParams} from 'react-native-draggable-flatlist';
import {Data, Record} from '@stmt/application';
import React from 'react';
import Animated from 'react-native-reanimated';
import Presenter from './Presenter';
import {useDispatch, useSelector} from 'react-redux';
import {RecordState, RootStore} from '@stmt/redux-store';
import {recordTaskAlign} from '@/redux/modules/record/actions';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParam} from '@/navigations/MainStack';

export interface TaskListProps {
  editable: boolean;
}

const TaskList = (props: TaskListProps) => {
  const {editable} = props;
  const dispatch = useDispatch();
  const {navigate} = useNavigation<StackNavigationProp<MainStackParam>>();
  const {tasks} = useSelector<RootStore, RecordState>((store) => store.record);
  console.log(tasks);

  const keyExtractor = (item: Data.Task | Record.NotFull, _index: number) =>
    `${item.index}`;

  const onDragEnd = (param: DragEndParams<Data.Task | Record.NotFull>) => {
    dispatch(recordTaskAlign(param.from, param.to));
  };

  const onClick = (index: number) => () => {
    navigate('TaskDetail', {index, isNew: false});
  };
  const onClickAdd = () => {
    navigate('TaskDetail', {index: tasks.length, isNew: true});
  };

  const makeList = () => {
    const data: Array<Record.RecordData> = tasks.map<Record.RecordData>(
      (task) => ({...task, onClick: onClick(task.index)})
    );

    if (editable && data.length < 6) {
      const notFull: Record.NotFull = {
        notFull: true,
        index: 6,
        onClick: onClickAdd
      };
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
