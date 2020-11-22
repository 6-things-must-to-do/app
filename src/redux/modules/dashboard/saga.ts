import {Data} from '@stmt/application';
import {put, takeLatest} from 'redux-saga/effects';
import {dashboardFetchList, dashboardSetList, FETCH_LIST} from './actions';

interface ProgressResponse {
  list?: Array<Data.Progress>;
}

const ProgressApi = (date: number) => {
  const data1 = [
    {x: 5, y: 0.8, m: 11},
    {x: 6, y: 0.4, m: 11},
    {x: 7, y: 0.75, m: 11},
    {x: 8, y: 0.4, m: 11},
    {x: 9, y: 0.6, m: 11},
    {x: 10, y: 1, m: 11},
    {x: 11, y: 1, m: 11},
    {x: 12, y: 0.8, m: 11},
    {x: 13, y: 0.5, m: 11}
  ];
  const data2 = [
    {x: 15, y: 0.8, m: 11},
    {x: 16, y: 1, m: 11},
    {x: 17, y: 0.3, m: 11},
    {x: 18, y: 0.7, m: 11},
    {x: 19, y: 1, m: 11},
    {x: 20, y: 0.4, m: 11},
    {x: 21, y: 0.6, m: 11},
    {x: 22, y: 0, m: 11},
    {x: 23, y: 0, m: 11}
  ];
  const data3 = [
    {x: 24, y: 0, m: 11},
    {x: 25, y: 0, m: 11},
    {x: 26, y: 0, m: 11},
    {x: 27, y: 0, m: 11},
    {x: 28, y: 0, m: 11},
    {x: 29, y: 0, m: 11},
    {x: 30, y: 0, m: 11},
    {x: 31, y: 0, m: 11},
    {x: 32, y: 0, m: 11}
  ];

  let data = [];
  let typeNumber: number;

  if (date < 10) {
    typeNumber = 1;
  } else if (date < 20) {
    typeNumber = 2;
  } else {
    typeNumber = 3;
  }

  switch (typeNumber) {
    case 1:
      data = data1;
      break;
    case 2:
      data = data2;
      break;
    default:
      data = data3;
      break;
  }

  const list: ProgressResponse = {
    list: data
  };
  console.log(
    `Api실행중: ${date}일의 Array<Data.Progress>를 받아오는 중입니다.`
  );
  return list;
};

function* progressSaga(action: ReturnType<typeof dashboardFetchList>) {
  try {
    const {payload} = action;
    const {list} = ProgressApi(payload);
    console.log('list: ', list);
    yield put(dashboardSetList(list));
  } catch (e) {
    console.log(e);
  }
}

export default function* dashboardSaga() {
  yield takeLatest(FETCH_LIST, progressSaga);
}
