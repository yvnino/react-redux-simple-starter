import { combineReducers } from 'redux';
import baseReducer from './base';
import toasterReducer from './notifications';


const rootReducer = combineReducers({
  baseReducer,
  toasterReducer
});

export default rootReducer;
