import AT from 'constants/actionTypes';

export const setTextSync = (payload) => ({
  type: AT.SET_TEXT_SYNC,
  payload
});

export const setTextAsync = (payload) => ({
  type: AT.SET_TEXT_ASYNC,
  payload
});

// ---------TOASTER---------
export const toasterSuccess = (data) => ({
  type: 'SUCCESS_MESSAGE', data
});

export const toasterFail = (e) => ({
  type: 'FAIL_MESSAGE', e
});
