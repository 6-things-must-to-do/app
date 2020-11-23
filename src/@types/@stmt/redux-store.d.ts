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

  interface RecordState {
    tasks: Array<Data.Task>;
    inProcess?: Data.Task;
    date?: Date;
  }

  interface DashboardState {
    date: number; // Date든 뭐든 뭐라도 되겠지 뭐
    progress: Array<Data.Progress>;
    tasks?: Array<Data.Task>;
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
    record: PersistPartial & RecordState;
    dashboard: DashboardState;
  }
}
