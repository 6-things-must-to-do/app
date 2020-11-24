import Task from '@/components/Task';
import {DragEndParams} from 'react-native-draggable-flatlist';
import {Data, TaskList as TL} from '@stmt/application';
import React from 'react';
import Animated from 'react-native-reanimated';
import Presenter from './Presenter';
import {useDispatch} from 'react-redux';
import {tasksTaskAlign} from '@/redux/modules/currentTasks/actions';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParam} from '@/navigations/MainStack';
import EditableStateProvider from '@/contexts/EditableState';
import {detailSetData} from '@/redux/modules/taskDetail/actions';

export interface TaskListProps {
  list: Array<TL.Task>;
  isRecord: boolean;
  isLocked: boolean;
}

const TaskList = (props: TaskListProps) => {
  const {isRecord, list, isLocked} = props;
  const dispatch = useDispatch();
  const {navigate} = useNavigation<StackNavigationProp<MainStackParam>>();

  const keyExtractor = (item: Data.Task | TL.NotFull, _index: number) =>
    `${item.priority}`;

  const onDragEnd = (param: DragEndParams<Data.Task | TL.NotFull>) => {
    dispatch(tasksTaskAlign(param.from, param.to));
  };

  const data: Array<TL.TaskListData> = [...list];

  if (!isRecord && !isLocked && list.length < 6) {
    const onClick = () => {
      let task: Data.Task = {
        createdAt: Date.now(),
        title: '',
        todos: [],
        priority: list.length,
        completedAt: null,
        estimatedMinutes: null,
        willStartAt: null
      };
      dispatch(
        detailSetData({
          detail: task,
          isRecord: false,
          isNew: true,
          isLocked: false
        })
      );
      navigate('TaskDetail');
    };

    const notFull: TL.NotFull = {
      priority: 6,
      onClick,
      notFull: true
    };
    data.push(notFull);
  }

  return (
    <EditableStateProvider editable={!isRecord}>
      <Presenter
        onDragEnd={onDragEnd}
        data={data}
        renderItem={Task}
        keyExtractor={keyExtractor}
        dragItemOverflow={false}
        animationConfig={{} as Animated.SpringConfig}
      />
    </EditableStateProvider>
  );
};

export default TaskList;
