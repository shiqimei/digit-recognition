import { combineReducers } from 'redux';
import App from './App';
import lastAction from './lastAction';

export default combineReducers({
	App,
	lastAction
});