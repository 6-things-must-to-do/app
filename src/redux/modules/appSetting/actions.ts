import {AppSetting} from '@stmt/application';
import {AppSettingState} from '@stmt/redux-store';

export const SET_TASK_ALERT = 'APP/SET_TASK_ALERT' as const;
export const SET_LOCK_HOUR = 'APP/SET_LOCL_HOUR' as const;
export const RESET = 'APP/RESET' as const;
export const SET_DATA = 'APP/SET_DATA' as const;

export const appSetTaskAlert = (data: AppSetting.SetAlert) => ({
  type: SET_TASK_ALERT,
  payload: data
});

export const appSetLockHours = (hour: number) => ({
  type: SET_LOCK_HOUR,
  payload: hour
});

export const appSetSetData = (data: Partial<AppSettingState>) => ({
  type: SET_DATA,
  payload: data
});

export const appSetReset = () => ({
  type: RESET
});
