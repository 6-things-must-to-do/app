declare module '@stmt/application' {
  namespace Data {
    interface Todo {
      content: string;
      isCompleted: boolean;
    }

    interface Task {
      index: 0 | 1 | 2 | 3 | 4 | 5;
      willStartAt?: number;
      estimatedMinutes?: number;
      completedAt?: number;
      createdAt: number;
      where?: string;
      memo?: string;
      todos: Array<Todo>;
    }

    interface TaskAlertSetting {
      hour: number;
      minute: number;
      offset: number;
    }

    interface UserBase {
      uuid: string;
      profileImage?: string;
      email: string;
      nickname: string;
    }

    interface UserProfile extends UserBase {
      taskAlertSetting: TaskAlertSetting;
    }
  }

  namespace APIResponse {
    interface MyPage extends Omit<Data.UserProfile, 'taskAlertSetting'> {
      taskAlertSetting?: Data.TaskAlertSetting;
    }

    interface SetTaskAlert {
      taskAlertSetting: Data.TaskAlertSetting;
    }
  }

  namespace Auth {
    type Provider = 'google' | 'apple';

    interface SocialData {
      email: string;
      nickname?: string;
      profileImage?: string;
      provider: Provider;
      id: string;
    }
  }

  namespace AppSetting {
    type Day = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';

    interface SetAlert extends Data.TaskAlertSetting {
      day?: Set<Day>;
    }
  }

  namespace Style {
    type Mode = 'dark' | 'light';

    interface TextTheme {
      default: string;
      warn: string;
      success: string;
      tint: string;
      outfocus: string;
      contrast: string;
    }

    interface DimensionTheme {
      primary: string;
      secondary: string;
      contrast: string;
      tint: string;
      warn: string;
      card: string;
      outfocus: string;
    }

    interface STMTTheme extends DimensionTheme {
      text: TextTheme;
    }
  }
}
