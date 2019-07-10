import { put, takeLatest, all } from 'redux-saga/effects';
import { APP } from '../actions/actionTypes';

const handleSaveImage = function* handleSaveImage({ canvas }) {
	const dataURL = canvas.toDataURL( "image/png" );
	console.log(dataURL)
}

const root = function* root() {
	yield takeLatest(APP.SAVE_IMAGE, handleSaveImage);
};
export default root;
