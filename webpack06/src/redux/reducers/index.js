import { combineReducers } from 'redux';
import todos from './cart.js';
import myinfo from './info.js';

const rootReducer = combineReducers({
	todos,
	myinfo
})

export default rootReducer;