import {Platform} from 'react-native';
import {STAGE} from '@env';

const isLocal = STAGE === 'local';

const localUrl =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:4000/api'
    : 'http://127.0.0.1:4000/api';

const prodUrl = '';

const devServer = 'https://dev.sixthings.tech/api';

export const BASE = __DEV__ ? (isLocal ? localUrl : devServer) : prodUrl;

export const LOGIN = '/auth/login' as const;
export const MYPAGE = '/user' as const;
export const SETTING = '/settings/task' as const;
export const RANK_ALL = '/social/rank/all' as const;
