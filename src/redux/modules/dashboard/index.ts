import {Data} from '@stmt/application';
import {DashboardState} from '@stmt/redux-store';
import {
  dashboardCurrentDate,
  dashboardSetList,
  dashboardSetTasks,
  CURRENT_DATE,
  SET_LIST,
  SET_TASKS
} from './actions';

// 오늘 날짜 기준 앞뒤로 가져오기

const data: Array<Data.Progress> = [];
const initialstate: DashboardState = {date: Date.now(), progressList: data};

export type DashboardAction = ReturnType<
  | typeof dashboardCurrentDate
  | typeof dashboardSetList
  | typeof dashboardSetTasks
>;

export default function reducer(
  state = initialstate,
  action: DashboardAction
): DashboardState {
  switch (action.type) {
    case CURRENT_DATE: {
      return {
        ...state,
        date: action.payload
      };
    }

    case SET_LIST: {
      return {...state, progressList: action.payload};
    }

    case SET_TASKS: {
      return {...state, tasks: action.payload};
    }

    default:
      return state;
  }
}
