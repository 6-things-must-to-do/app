import useCurrentTask from '@/hooks/useCurrentTask';
import {RootStore, TaskDetailState} from '@stmt/redux-store';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Presenter from './Presenter';

const TaskInfo = () => {
  const [isFolded, setIsFolded] = useState(true);
  const {isRecord, isLocked} = useSelector<RootStore, TaskDetailState>(
    (store) => store.taskDetail
  );

  const onToggleDetail = () => {
    setIsFolded(!isFolded);
  };
  const {control, task} = useCurrentTask();
  const editable = !isRecord && !isLocked;

  return (
    <Presenter
      editable={editable}
      control={control}
      task={task}
      onToggleDetail={onToggleDetail}
      isFolded={isFolded}
    />
  );
};

export default TaskInfo;
