import { combineReducers } from 'redux';
import toasterReducer from './notifications.js';
import styleReducer from './style.js';


const mainReducer = combineReducers({
    toasterReducer,
    styleReducer
})

export default mainReducer