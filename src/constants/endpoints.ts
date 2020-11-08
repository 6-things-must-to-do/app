import {Platform} from 'react-native';

export const BASE =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:4000/api'
    : 'http://localhost:4000/api';

export const LOGIN = '/auth/login' as const;
export const MYPAGE = '/users/my-page' as const;
export const SETTING = '/settings/task' as const;
