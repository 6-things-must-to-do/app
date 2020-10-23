declare module '@stmt/redux-store' {
  import {PersistPartial} from 'redux-persist/es/persistReducer';

  interface AuthState {
    token?: string;
  }

  interface GlobalState {
    error?: any;
    isLoading: boolean;
  }

  interface Store {
    auth: PersistPartial & AuthState;
    global: GlobalState;
  }
}
