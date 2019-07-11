import { takeLatest } from 'redux-saga/effects';
import { APP } from '../actions/actionTypes';
import { randomString } from '../utils';
import { saveAs } from 'file-saver';

const handleRecognizeRequest = function* handleRecognizeRequest({ blob }) {
	console.log(blob);
}

const handleSaveImage = function* handleSaveImage({ canvas }) {
	yield canvas.toBlob(blob => {
		saveAs(blob, `${ randomString(20) }.jpg`);
	}, 'image/jpeg');
}

const root = function* root() {
	yield takeLatest(APP.RECOGNIZE_REQUEST, handleRecognizeRequest);
	yield takeLatest(APP.SAVE_IMAGE, handleSaveImage);
};
export default root;
