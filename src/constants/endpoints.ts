import {Platform} from 'react-native';
import {STAGE} from '@env';

const isLocal = STAGE === 'local';

const localUrl =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:4000/api'
    : 'http://127.0.0.1:4000/api';

const prodUrl = '';

const devServer = 'http://dev.sixthings.tech/api';

export const BASE = __DEV__ ? (isLocal ? localUrl : devServer) : prodUrl;

export const LOGIN = '/auth/login' as const;
export const MYPAGE = '/users/my-page' as const;
export const SETTING = '/settings/task' as const;
