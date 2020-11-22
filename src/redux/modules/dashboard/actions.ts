import {Data} from '@stmt/application';

export const FETCH_LIST = 'DASHBOARD/FETCH_LIST' as const;
export const FETCH_TASKS = 'DASHBOARD/FETCH_TASKS' as const;

export const CURRENT_DATE = 'DASHBOARD/CURRENT_DATE' as const;
export const SET_LIST = 'DASHBOARD/SET_LIST' as const;
export const SET_TASKS = 'DASHBOARD/SET_TASKS' as const;

// progress list를 받아옴. date = current_date (현재 보고 있는 날짜.)
export const dashboardFetchList = (date: number) => ({
  type: FETCH_LIST,
  payload: date
});

// current_date 의 task list를 불러옴. date = current_date (현재 보고 있는 날짜)
export const dashboardFetchTasks = (date: number) => ({
  type: FETCH_TASKS,
  payload: date
});

// date: 설정하려는 날짜
export const dashboardCurrentDate = (date: number) => ({
  type: CURRENT_DATE,
  payload: date
});

// list: progress list
export const dashboardSetList = (list: Array<Data.Progress>) => ({
  type: SET_LIST,
  payload: list
});

// list: task list
export const dashboardSetTasks = (list: Array<Data.Task>) => ({
  type: SET_TASKS,
  payload: list
});
