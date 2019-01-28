import { set } from 'lodash/fp';
import { handleActions } from 'redux-actions';
import AT from 'constants/actionTypes';

export const initialState = {
  text: null
};

const baseReducer = handleActions({
  [AT.SET_TEXT_SYNC]: (state, action) => {
    return set('text', action.payload, state);
  },
  [AT.SET_TEXT_ASYNC.SUCCESS]: (state, action) => {
    return set('text', action.payload.data[0], state);
  }
}, initialState);

export default baseReducer;
