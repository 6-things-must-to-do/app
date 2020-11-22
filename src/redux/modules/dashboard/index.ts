import {DashboardState} from '@stmt/redux-store';
import {
  dashboardCurrentDate,
  dashboardSetList,
  dashboardSetTasks,
  CURRENT_DATE,
  SET_LIST,
  SET_TASKS
} from './actions';
import getTime from '@/utils/getTime';

// 오늘 날짜 기준 앞뒤로 가져오기
const data = [
  {x: 1, y: 1, m: 11},
  {x: 2, y: 1, m: 11},
  {x: 3, y: 0.8, m: 11},
  {x: 4, y: 0.2, m: 11},
  {x: 5, y: 0.8, m: 11},
  {x: 6, y: 0.4, m: 11},
  {x: 7, y: 0.75, m: 11},
  {x: 8, y: 0.4, m: 11},
  {x: 9, y: 0.6, m: 11}
];
const initialstate: DashboardState = {date: getTime(), progress: data};

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
      return {...state, progress: action.payload};
    }

    case SET_TASKS: {
      return {...state, tasks: action.payload};
    }

    default:
      return state;
  }
}
