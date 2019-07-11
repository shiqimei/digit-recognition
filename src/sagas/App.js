import { put, takeLatest, all } from 'redux-saga/effects';
import { APP } from '../actions/actionTypes';
import { dataURIToBlob } from '../utils';

const handleSaveImage = function* handleSaveImage({ canvas }) {
	const dataURL = canvas.toDataURL( "image/png" );
	const blob = dataURIToBlob(dataURL);
	console.log(blob)
}

const root = function* root() {
	yield takeLatest(APP.SAVE_IMAGE, handleSaveImage);
};
export default root;
