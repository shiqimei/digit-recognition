import { put, takeLatest, all } from 'redux-saga/effects';
import { APP } from '../actions/actionsTypes';

const handleSaveImage = function* handleSaveImage({ canvas }) {
	console.log(canvas);
}

const root = function* root() {
	yield takeLatest(APP.SAVE_IMAGE, handleSaveImage);
};
export default root;
