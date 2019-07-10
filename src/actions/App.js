import * as types from './actionTypes';

export function RecognizeRequest(image) {
	return {
		type: types.APP.RECOGNIZE_REQUEST,
		image
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