declare module '@stmt/application' {
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
