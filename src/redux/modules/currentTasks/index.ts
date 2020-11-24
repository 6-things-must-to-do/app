import * as R from 'ramda';
import {CurrentTasksState} from '@stmt/redux-store';
import {
  ADD_TASK,
  ALIGN_TASKS,
  CLICK_TASK_CHECKBOX,
  tasksAddTask,
  tasksSetData,
  tasksTaskAlign,
  tasksUpdateTask,
  tasksClickTaskCheckbox,
  tasksUpdateTodo,
  SET_DATA,
  UPDATE_TASK,
  UPDATE_TODO
} from './actions';

const initialState: CurrentTasksState = {
  tasks: []
};

export type CurrentTasksAction = ReturnType<
  | typeof tasksSetData
  | typeof tasksTaskAlign
  | typeof tasksAddTask
  | typeof tasksUpdateTask
  | typeof tasksClickTaskCheckbox
  | typeof tasksUpdateTodo
>;

export default function reducer(
  state = initialState,
  action: CurrentTasksAction
): CurrentTasksState {
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

    case UPDATE_TODO: {
      const {todo, index, taskIndex} = action.payload;
      const tasks = [...state.tasks];
      const targetTaskIndex = tasks.findIndex(
        (task) => task.priority === taskIndex
      );

      if (targetTaskIndex === -1) return state;

      const targetTask = tasks[targetTaskIndex];
      const todos = [...targetTask.todos];
      const target = todos[index];
      if (!target) return state;

      todos[index] = todo;
      tasks[targetTaskIndex] = {...targetTask, todos};

      return R.mergeRight(state, {tasks});
    }

    default:
      return state;
  }
}
