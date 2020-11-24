import React, {createContext, ReactNode} from 'react';

interface Props {
  children: ReactNode;
  editable: boolean;
}

export const EditableStateContext = createContext(false);

const EditableStateProvider = (props: Props) => {
  const {children, editable} = props;

  const defaultValue = editable;

  return (
    <EditableStateContext.Provider value={defaultValue}>
      {children}
    </EditableStateContext.Provider>
  );
};

export default EditableStateProvider;
