import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(calendar);

export const unixToDate = (unix: number): string => {
  return dayjs(unix).format('DD/MM/YYYY'); // '25/01/2019'
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
