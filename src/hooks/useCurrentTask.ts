import {useContext} from 'react';
import {
  CurrentTaskDetailContext,
  CurrentTaskDetail
} from '@/contexts/CurrentTaskDetail';

function useCurrentTask(): CurrentTaskDetailContext {
  const theme = useContext<CurrentTaskDetailContext>(CurrentTaskDetail);
  return theme;
}

export default useCurrentTask;
