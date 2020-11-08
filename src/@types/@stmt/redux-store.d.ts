declare module '@stmt/redux-store' {
  import {PersistPartial} from 'redux-persist/es/persistReducer';
  import {Data} from '@stmt/application';

  interface AuthState {
    token?: string;
  }

  interface GlobalState {
    error?: any;
    isLoading: boolean;
  }

  type UserState = Partial<Data.UserBase>;

  interface TaskRelated {
    setAlert: Data.TaskAlertSetting;
    lock: number;
  }

  type AppSettingState = Partial<Pick<TaskRelated, 'setAlert'>> &
    Pick<TaskRelated, 'lock'>;

  interface RootStore {
    auth: PersistPartial & AuthState;
    global: GlobalState;
    user: UserState;
    appSetting: PersistPartial & AppSettingState;
  }
}
