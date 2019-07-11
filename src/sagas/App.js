import { put, takeLatest, all } from 'redux-saga/effects';
import { APP } from '../actions/actionTypes';
import { dataURIToBlob, randomString } from '../utils';
import { saveAs } from 'file-saver';

const handleSaveImage = function* handleSaveImage({ canvas }) {
	const dataURL = canvas.toDataURL( "image/png" );
	const blob = dataURIToBlob(dataURL);
	yield saveAs(blob, randomString(20));
}

const root = function* root() {
	yield takeLatest(APP.SAVE_IMAGE, handleSaveImage);
};
export default root;
