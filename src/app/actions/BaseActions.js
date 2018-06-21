import axios from 'axios';
import AT from 'constants/actionTypes';

export const setTextSync = (data) => ({
  type: AT.SET_TEXT_SYNC,
  payload: data
});

const setTextAsyncSuccess = (data) => ({
  type: AT.SET_TEXT_ASYNC_SUCCESS,
  payload: data
});

const setTextAsyncFail = (data) => ({
  type: AT.SET_TEXT_ASYNC_FAIL,
  payload: data
});

// ---------TOASTER---------
export const toasterSuccess = (data) => ({
  type: 'SUCCESS_MESSAGE', data
});

export const toasterFail = (e) => ({
  type: 'FAIL_MESSAGE', e
});

export const setTextAsync = () => (dispatch) => {
  axios.get('https://baconipsum.com/api/?type=meat-and-filler')
    .then((response) => {
      dispatch(setTextAsyncSuccess(response.data[0]));
      dispatch(toasterSuccess({ msg: 'TextAsync success' }));
    })
    .catch((error) => {
      dispatch(setTextAsyncFail(error.message));
    });
};
