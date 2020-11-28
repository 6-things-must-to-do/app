import * as R from 'ramda';
import {RecordState} from '@stmt/redux-store';
import {
  ADD_TASK,
  ALIGN_TASKS,
  CLICK_TASK_CHECKBOX,
  recordAddTask,
  recordSetData,
  recordTaskAlign,
  recordUpdateTask,
  recordClickTaskCheckbox,
  SET_DATA,
  UPDATE_TASK
} from './actions';

const initialState: RecordState = {
  metaList: [],
  tasks: []
};

export type RecordAction = ReturnType<
  | typeof recordSetData
  | typeof recordTaskAlign
  | typeof recordAddTask
  | typeof recordUpdateTask
  | typeof recordClickTaskCheckbox
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

      [tasks[from].priority, tasks[to].priority] = [
        tasks[to].priority,
        tasks[from].priority
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

    case CLICK_TASK_CHECKBOX: {
      const priority = action.payload;
      const tasks = state.tasks;

      tasks[priority].completedAt = tasks[priority].completedAt
        ? null
        : Date.now();

      const newState = {tasks};

      return R.mergeRight(state, newState);
    }

    case UPDATE_TASK: {
      const tasks = state.tasks;
      const target = action.payload;

      const arrayIndex = tasks.findIndex(
        (task) => task.priority === target.priority
      );
      if (arrayIndex === -1) return state;

      tasks[arrayIndex] = target;

      const newTasks = [...tasks];
      return R.mergeRight(state, {tasks: newTasks});
    }

    default:
      return state;
  }
}
