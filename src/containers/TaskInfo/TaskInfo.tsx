import React, {useState} from 'react';
import Presenter from './Presenter';

const TaskInfo = () => {
  const [isFolded, setIsFolded] = useState(true);
  const onToggleDetail = () => {
    setIsFolded(!isFolded);
  };

  return <Presenter onToggleDetail={onToggleDetail} isFolded={isFolded} />;
};

export default TaskInfo;
