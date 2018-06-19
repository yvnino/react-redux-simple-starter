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

export const setTextAsync = () => (dispatch) => {
  axios.get('https://baconipsum.com/api/?type=meat-and-filler')
    .then((response) => {
      dispatch(setTextAsyncSuccess(response.data[0]));
    })
    .catch((error) => {
      dispatch(setTextAsyncFail(error.message));
    });
};
