import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(calendar);

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
