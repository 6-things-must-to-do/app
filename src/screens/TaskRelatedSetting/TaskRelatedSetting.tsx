import StyledList from '@/components/StyledList';
import LockTimeSettingListItem from '@/containers/LockTimeSettingListItem';
import TaskAlertSettingListItem from '@/containers/TaskAlertSettingListItem';
import React from 'react';

const TaskRelatedSetting = () => {
  return (
    <StyledList>
      <TaskAlertSettingListItem />
      <LockTimeSettingListItem />
    </StyledList>
  );
};

export default TaskRelatedSetting;
