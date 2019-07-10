function createTypes(base, types = []) {
	const res = {};
	types.forEach(type => (res[type] = `${ base }_${ type }`));
	return res;
}

export const APP = createTypes('APP', [
	'RECOGNIZE_REQUEST',
	'RECOGNIZE_SUCCESS',
	'RECOGNIZE_FAILED',
	'SAVE_IMAGE'
]);