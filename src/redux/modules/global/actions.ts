export const SET_ERROR = 'GLOBAL/SET_ERROR' as const;
export const RESET_ERROR = 'GLOBAL/RESET_ERROR' as const;

export const globalSetError = (e: any) => ({
  type: SET_ERROR,
  payload: e
});

export const globalResetError = () => ({
  type: RESET_ERROR
});
