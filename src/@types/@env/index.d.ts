type STAGE = 'local' | 'development' | 'production';

declare module '@env' {
  export const STAGE: STAGE;
}
