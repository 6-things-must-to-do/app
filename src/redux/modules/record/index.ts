import * as R from 'ramda';
import {RecordState} from '@stmt/redux-store';
import {
  ADD_TASK,
  ALIGN_TASKS,
  recordAddTask,
  recordSetData,
  recordTaskAlign,
  SET_DATA
} from './actions';

const initialState: RecordState = {
  tasks: []
};

export type RecordAction = ReturnType<
  typeof recordSetData | typeof recordTaskAlign | typeof recordAddTask
>;

export default function reducer(
  state = initialState,
  action: RecordAction
): RecordState {
  switch (action.type) {
    case SET_DATA: {
      return R.mergeRight(state, action.payload);
    }

    case ALIGN_TASKS: {
      const {from, to} = action.payload;
      const tasks = state.tasks;

      [tasks[from].index, tasks[to].index] = [
        tasks[to].index,
        tasks[from].index
      ];
      [tasks[from], tasks[to]] = [tasks[to], tasks[from]];

      const newState = {tasks};

      return R.mergeRight(state, newState);
    }

    case ADD_TASK: {
      const tasks = state.tasks;
      tasks.push(action.payload);
      const newState = {tasks};
      return R.mergeRight(state, newState);
    }

    default:
      return state;
  }
}
