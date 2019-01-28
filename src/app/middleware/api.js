import axios from 'axios';
import AT from 'constants/actionTypes';

// eslint-disable-next-line
export const apiMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  // If its not an core-app async action, pass next.
  if (typeof action.type === 'undefined') return next(action);
  // get action types
  const { type, payload } = action;

  switch (type) {
    case AT.SET_TEXT_ASYNC: {
      dispatch({
        type: AT.SET_TEXT_ASYNC.PENDING,
        payload
      });

      axios.get('https://baconipsum.com/api/?type=meat-and-filler')
        .then((response) => {
          dispatch({
            type: AT.SET_TEXT_ASYNC.SUCCESS,
            payload: response
          });
        })
        .catch((err) => {
          dispatch({
            type: AT.SET_TEXT_ASYNC.FAILURE,
            payload: err
          });
          dispatch({
            type: 'FAIL_MESSAGE', data: { err }
          });
        });

      break;
    }

    default:
      return next(action);
  }

  return next(action);
};
