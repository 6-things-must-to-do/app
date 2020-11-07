declare module '@stmt/redux-store' {
  import {PersistPartial} from 'redux-persist/es/persistReducer';

  interface AuthState {
    token?: string;
  }

  interface GlobalState {
    error?: any;
    isLoading: boolean;
  }

  interface UserState {
    uuid?: string;
    profileImage?: string;
    email?: string;
    nickname?: string;
  }

  interface RootStore {
    auth: PersistPartial & AuthState;
    global: GlobalState;
    user: UserState;
  }
}
