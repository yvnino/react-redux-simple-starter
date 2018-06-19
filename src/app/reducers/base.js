import { set } from 'lodash/fp';
import AT from 'constants/actionTypes';

export const initialState = {
  text: null
};

const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_TEXT_ASYNC_SUCCESS:
    case AT.SET_TEXT_SYNC: {
      return set('text', action.payload, state);
    }
    case AT.SET_TEXT_ASYNC_FAIL: {
      return set('text', action.payload, state);
    }
    default:
      return state;
  }
};

export default baseReducer;
