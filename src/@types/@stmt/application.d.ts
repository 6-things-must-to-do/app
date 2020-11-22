declare module '@stmt/application' {
  namespace Data {
    interface Todo {
      content: string;
      isCompleted: boolean;
    }

    interface Task {
      index: number;
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

    // 위치가 이상함. 정의도 이상함. 일단은 이렇게 써놓음.
    interface Progress {
      x: number; // 날짜 (ex:06)
      y: number; // 수행율 (0~1)
      m: number; // 해당일의 월 (ex:11)
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

  namespace Record {
    interface NoTask {
      noTask: true;
      index: -1;
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
