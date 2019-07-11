import * as types from './actionTypes';

export function RecognizeRequest(blob) {
	return {
		type: types.APP.RECOGNIZE_REQUEST,
		blob
	};
}

export function RecognizeSuccess(number) {
	return {
		type: types.APP.RECOGNIZE_SUCCESS,
		number
	};
}

export function RecognizeFailed(err) {
	return {
		type: types.APP.RECOGNIZE_FAILED,
		err
	};
}

export function SaveImage(canvas) {
	return {
		type: types.APP.SAVE_IMAGE,
		canvas
	};
}