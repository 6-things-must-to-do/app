import {useContext} from 'react';
import {EditableStateContext} from '@/contexts/EditableState';

function useEditableState(): boolean {
  const editable = useContext<boolean>(EditableStateContext);
  return editable;
}

export default useEditableState;
