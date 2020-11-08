export const intToClockString = (n: number): string => {
  if (n < 10) return `0${n}`;
  return `${n}`;
};
