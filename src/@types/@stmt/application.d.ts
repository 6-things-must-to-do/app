declare module '@stmt/application' {
  namespace Auth {
    type Provider = 'google' | 'apple';
  }

  namespace Style {
    type Mode = 'dark' | 'light';

    interface STMTTheme {
      primary: string;
      secondary: string;
      tint: string;
      warn: string;
      card: string;
      outfocus: string;
      text: {
        default: string;
        warn: string;
        success: string;
      };
    }
  }
}
