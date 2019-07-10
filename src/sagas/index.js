import { all } from 'redux-saga/effects';
import App from './App';

const root = function* root() {
	yield all([
		App()
	]);
};

export default root;
