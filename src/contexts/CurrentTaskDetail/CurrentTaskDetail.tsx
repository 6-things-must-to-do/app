import {Data} from '@stmt/application';
import React, {createContext, Dispatch, ReactNode, SetStateAction} from 'react';
import {Control} from 'react-hook-form';

export interface CurrentTaskDetailContext {
  control: Control<Data.Task>;
  task: Data.Task;
  isNew: boolean;
  setTask: Dispatch<SetStateAction<Data.Task>>;
}

interface Props {
  children: ReactNode;
  task: Data.Task;
  isNew: boolean;
  control: Control<Data.Task>;
  setTask: Dispatch<SetStateAction<Data.Task>>;
}

export const CurrentTaskDetail = createContext<CurrentTaskDetailContext>(
  {} as CurrentTaskDetailContext
);

const CurrentTaskDetailProvider = (props: Props) => {
  const {task, children, control, isNew, setTask} = props;

  const defaultValue: CurrentTaskDetailContext = {
    control,
    task,
    isNew,
    setTask
  };

  return (
    <CurrentTaskDetail.Provider value={defaultValue}>
      {children}
    </CurrentTaskDetail.Provider>
  );
};

export default CurrentTaskDetailProvider;
