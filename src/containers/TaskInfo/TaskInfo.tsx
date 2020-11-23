import useCurrentTask from '@/hooks/useCurrentTask';
import React, {useState} from 'react';
import Presenter from './Presenter';

const TaskInfo = () => {
  const [isFolded, setIsFolded] = useState(true);
  const onToggleDetail = () => {
    setIsFolded(!isFolded);
  };

  const {control, task} = useCurrentTask();

  return (
    <Presenter
      control={control}
      task={task}
      onToggleDetail={onToggleDetail}
      isFolded={isFolded}
    />
  );
};

export default TaskInfo;
