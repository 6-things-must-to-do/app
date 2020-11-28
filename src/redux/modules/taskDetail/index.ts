import * as R from 'ramda';
import {TaskDetailState} from '@stmt/redux-store';
import {
  detailSetData,
  detailUpdateTodo,
  SET_DATA,
  UPDATE_TODO
} from './actions';
import {Data} from '@stmt/application';

const initialState: TaskDetailState = {
  isRecord: false,
  isLocked: false,
  isNew: false
};

export type TaskDetailAction = ReturnType<
  typeof detailSetData | typeof detailUpdateTodo
>;

export default function reducer(
  state = initialState,
  action: TaskDetailAction
): TaskDetailState {
  switch (action.type) {
    case SET_DATA: {
      return R.mergeRight(state, action.payload);
    }

    case UPDATE_TODO: {
      if (!state.detail) return state;
      const {payload: todos} = action;
      const newDetail: Data.Task = {...state.detail, todos};

      return R.mergeRight(state, {detail: newDetail});
    }

    default:
      return state;
  }
}
