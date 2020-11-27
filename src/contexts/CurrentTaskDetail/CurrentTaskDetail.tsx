import {Data} from '@stmt/application';
import React, {createContext, ReactNode} from 'react';
import {Control} from 'react-hook-form';

export interface CurrentTaskDetailContext {
  control: Control<Data.Task>;
  task: Data.Task;
  isNew: boolean;
  isLocked: boolean;
}

interface Props {
  children: ReactNode;
  task: Data.Task;
  isNew: boolean;
  isLocked: boolean;
  control: Control<Data.Task>;
}

export const CurrentTaskDetail = createContext<CurrentTaskDetailContext>(
  {} as CurrentTaskDetailContext
);

const CurrentTaskDetailProvider = (props: Props) => {
  const {children, ...values} = props;

  return (
    <CurrentTaskDetail.Provider value={values}>
      {children}
    </CurrentTaskDetail.Provider>
  );
};

export default CurrentTaskDetailProvider;
