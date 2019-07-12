import { takeLatest, put, call } from 'redux-saga/effects';
import { APP } from '../actions/actionTypes';
import { randomString } from '../utils';
import { saveAs } from 'file-saver';
import API from '../lib/API';
import {
	RecognizeSuccess, RecognizeFailed
} from '../actions/App';

const recognizeImage = imageBase64 => API.recognizeImage(imageBase64);

const handleRecognizeRequest = function* handleRecognizeRequest({ imageBase64 }) {
	try {
		const number = yield call(recognizeImage, imageBase64);
		yield put(RecognizeSuccess(number));
	} catch (err) {
		yield put(RecognizeFailed(err));
		console.warn(err);
	}
}

const handleSaveImage = function* handleSaveImage({ canvas }) {
	yield canvas.toBlob(blob => {
		saveAs(blob, randomString(20));
	});
}

const root = function* root() {
	yield takeLatest(APP.RECOGNIZE_REQUEST, handleRecognizeRequest);
	yield takeLatest(APP.SAVE_IMAGE, handleSaveImage);
};
export default root;
