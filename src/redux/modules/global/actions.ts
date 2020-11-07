export const RESET_ALL = 'RESET_ALL' as const;
export const RESET = 'RESET' as const;
export const SET_ERROR = 'GLOBAL/SET_ERROR' as const;
export const RESET_ERROR = 'GLOBAL/RESET_ERROR' as const;
export const SET_LOADING = 'GLOBAL/SET_LOADING' as const;

export const globalSetError = (e: any) => ({
  type: SET_ERROR,
  payload: e
});

export const globalResetAll = () => ({
  type: RESET_ALL
});

export const globalReset = () => ({
  type: RESET
});

export const globalResetError = () => ({
  type: RESET_ERROR
});

export const globalSetLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading
});
