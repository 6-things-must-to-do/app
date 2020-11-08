import {Data} from '@stmt/application';

export const hasSetAlertNull = (target: Data.TaskAlertSetting) => {
  const {hour, minute, offset} = target;

  const isHourNumber = typeof hour === 'number';
  const isMinuteNumber = typeof minute === 'number';
  const isOffsetNumber = typeof offset === 'number';
  const allNumber = isHourNumber && isMinuteNumber && isOffsetNumber;

  return !allNumber;
};
