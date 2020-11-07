import {Auth} from '@stmt/application';
import {AuthState} from '@stmt/redux-store';

export const SET_PARTIAL = 'AUTH/SET_DATA' as const;
export const LOGIN = 'AUTH/LOGIN' as const;

export const authSetPartialData = (data: AuthState) => ({
  type: SET_PARTIAL,
  payload: data
});

export const authLogin = (data: Auth.SocialData) => ({
  type: LOGIN,
  payload: data
});
