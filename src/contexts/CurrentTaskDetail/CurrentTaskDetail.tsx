import {Data} from '@stmt/application';
import React, {createContext, ReactNode} from 'react';
import {Control} from 'react-hook-form';

export interface CurrentTaskDetailContext {
  control: Control<Data.Task>;
  task: Data.Task;
}

interface Props {
  children: ReactNode;
  task: Data.Task;
  control: Control<Data.Task>;
}

export const CurrentTaskDetail = createContext<CurrentTaskDetailContext>(
  {} as CurrentTaskDetailContext
);

const CurrentTaskDetailProvider = (props: Props) => {
  const {task, children, control} = props;

  const defaultValue: CurrentTaskDetailContext = {control, task};

  return (
    <CurrentTaskDetail.Provider value={defaultValue}>
      {children}
    </CurrentTaskDetail.Provider>
  );
};

export default CurrentTaskDetailProvider;
