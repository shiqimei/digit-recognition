import * as types from '../actions/actionTypes';

const initialState = {
	isFetching: false,
	failure: false,
	error: {},
	number: 0
}

export default function App(state = initialState, action) {
	switch(action.type) {
		case types.APP.RECOGNIZE_REQUEST:
			return {
				...state,
				isFetching: true,
				failure: false,
				error: {}
			};
		case types.APP.RECOGNIZE_FAILED:
			return {
				...state,
				isFetching: false,
				failure: true,
				error: action.err
			};
		case types.APP.RECOGNIZE_SUCCESS:
			return {
				...state,
				isFetching: false,
				number: action.number
			};
		default:
			return state;
	}
}