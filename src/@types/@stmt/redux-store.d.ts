declare module '@stmt/redux-store' {
  import {PersistPartial} from 'redux-persist/es/persistReducer';
  import {Data} from '@stmt/application';

  interface AuthState {
    token?: string;
  }

  type GetToken = (store: RootStore) => AuthState;

  interface GlobalState {
    error?: any;
    isLoading: boolean;
  }

  interface CurrentTasksState {
    current: number;
    tasks: Array<Data.Task>;
    meta?: Data.TaskMeta;
    lockTime?: number;
    date?: Date;
  }

  interface RecordState {
    date: number;
    tasks: Array<Data.Task>;
    standard?: number;
    metaList: Array<Data.RecordMeta>;
  }

  interface TaskDetailState {
    isRecord: boolean;
    isLocked: boolean;
    isNew: boolean;
    detail?: Data.Task;
  }

  type RankType = 'all' | 'friends';

  interface SocialState {
    date: number;
    type: RankType;
    ranking: Array<Data.Rank>;
    follower: Array<Data.UserBase>;
    following: Array<Data.UserBase>;
  }

  interface DashboardState {
    date: number; // Date든 뭐든 뭐라도 되겠지 뭐
    progressList: Array<Data.Progress>;
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
    currentTasks: PersistPartial & CurrentTasksState;
    taskDetail: TaskDetailState;
    social: SocialState;
    record: PersistPartial & RecordState;
    dashboard: DashboardState;
  }
}
