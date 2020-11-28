import {Data} from '@stmt/application';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import dayOfYear from 'dayjs/plugin/dayOfYear';

dayjs.extend(calendar);
dayjs.extend(dayOfYear);

export const getYesterdayTimestamp = (): number => {
  return dayjs()
    .subtract(1, 'day')
    .set('hour', 0)
    .set('minute', 0)
    .set('second', 0)
    .set('millisecond', 0)
    .toDate()
    .getTime();
};

export const getDayOfYear = (): number => {
  return dayjs().dayOfYear();
};

export const getProgressBase = (date: number): Data.ProgressBase => {
  const day = dayjs(date);
  const ret: Data.ProgressBase = {
    day: day.daysInMonth(),
    year: day.year(),
    month: day.month(),
    dayOfYear: day.dayOfYear()
  };

  return ret;
};

export const unixToDateFormat = (unix: number): string => {
  return dayjs(unix).format('DD / MM / YYYY'); // '25/01/2019'
};

export const getToday = () => {
  return dayjs().format('DD / MM / YYYY');
};

export const unixToCalendar = (unix: number): string => {
  return dayjs(unix).calendar();
};

export const unixToDayTime = (unix: number): {minute: number; hour: number} => {
  const day = dayjs(unix);
  const minute = day.minute();
  const hour = day.hour();
  return {
    minute,
    hour
  };
};

export const DateStringToUnix = (date: string): number => {
  return dayjs(date, 'DD/MM/YYYY').toDate().getTime();
};

export const unixToDate = (unix?: number): Date => {
  return dayjs(unix).toDate();
};
