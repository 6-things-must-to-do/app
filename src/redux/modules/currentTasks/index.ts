import * as R from 'ramda';
import {CurrentTasksState} from '@stmt/redux-store';
import {
  ADD_TASK,
  ALIGN_TASKS,
  tasksAddTask,
  tasksSetData,
  tasksTaskAlign,
  tasksUpdateTask,
  tasksUpdateTodo,
  tasksUpdateTodoList,
  SET_DATA,
  UPDATE_TASK,
  UPDATE_TODO,
  tasksDeleteTask,
  DELETE_TASK,
  COMPLETE_TASK_UPDATE,
  tasksCompleteUpdate,
  OVERWRITE,
  tasksOverwrite,
  UPDATE_TODO_LIST
} from './actions';
import {Data} from '@stmt/application';

export const initialState: CurrentTasksState = {
  tasks: [],
  current: -1
};

export type CurrentTasksAction = ReturnType<
  | typeof tasksSetData
  | typeof tasksOverwrite
  | typeof tasksTaskAlign
  | typeof tasksAddTask
  | typeof tasksDeleteTask
  | typeof tasksUpdateTask
  | typeof tasksCompleteUpdate
  | typeof tasksUpdateTodo
  | typeof tasksUpdateTodoList
>;

export default function reducer(
  state = initialState,
  action: CurrentTasksAction
): CurrentTasksState {
  switch (action.type) {
    case SET_DATA: {
      return R.mergeRight(state, action.payload);
    }

    case OVERWRITE: {
      return action.payload;
    }

    case DELETE_TASK: {
      const priority = action.payload;
      const newTasks = state.tasks.filter((task) => task.priority !== priority);
      const len = newTasks.length;
      for (let i = priority; i < len; i++) {
        newTasks[i].priority = i;
      }

      return R.mergeRight(state, {tasks: newTasks});
    }

    case ALIGN_TASKS: {
      const frontToBack = (
        front: number,
        back: number,
        arr: Array<Data.Task>
      ) => {
        const [head, mid, tail] = [
          arr.slice(0, front),
          arr.slice(front + 1, back + 1),
          arr.slice(back + 1)
        ];

        return [...head, ...mid, arr[front], ...tail];
      };

      const backToFront = (
        front: number,
        back: number,
        arr: Array<Data.Task>
      ) => {
        const [head, mid, tail] = [
          arr.slice(0, front),
          arr.slice(front, back),
          arr.slice(back + 1)
        ];

        return [...head, arr[back], ...mid, ...tail];
      };

      const {from, to} = action.payload;
      const tasks = state.tasks;

      const isBackToFront = from > to;
      const [front, back] = isBackToFront ? [to, from] : [from, to];
      const taskFactory = isBackToFront ? backToFront : frontToBack;
      const newTasks = taskFactory(front, back, tasks).map((task, index) => ({
        ...task,
        priority: index
      }));

      const newState = {tasks: newTasks};

      return R.mergeRight(state, newState);
    }

    case ADD_TASK: {
      const tasks = state.tasks;
      tasks.push(action.payload);
      const newState = {tasks};
      return R.mergeRight(state, newState);
    }

    case COMPLETE_TASK_UPDATE: {
      const {priority, completedAt} = action.payload;
      const tasks = state.tasks;
      tasks[priority].completedAt = completedAt;
      const newState = {tasks, current: priority + 1};
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
      const cState = R.clone(state);
      const tasks = cState.tasks;
      const targetTaskIndex = tasks.findIndex(
        (task) => task.priority === taskIndex
      );

      if (targetTaskIndex === -1) return state;

      const todos = tasks[targetTaskIndex].todos;
      const target = todos[index];
      if (!target) return state;

      todos[index] = todo;
      tasks[targetTaskIndex].todos = todos;

      return R.mergeRight(state, {tasks});
    }

    case UPDATE_TODO_LIST: {
      const cState = R.clone(state);
      const {priority, todos} = action.payload;
      const targetTask = cState.tasks[priority];
      targetTask.todos = todos;
      const newTasks: Array<Data.Task> = [...cState.tasks];
      const newState = {tasks: newTasks};
      return R.mergeRight(state, newState);
    }

    default:
      return state;
  }
}
