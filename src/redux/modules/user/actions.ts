import {UserState} from '@stmt/redux-store';

export const RESET = 'USER/RESET' as const;
export const SET_DATA = 'USER/SET_DATA' as const;

export const userSetData = (data: UserState) => ({
  type: SET_DATA,
  payload: data
});

export const userReset = () => ({
  type: RESET
});
