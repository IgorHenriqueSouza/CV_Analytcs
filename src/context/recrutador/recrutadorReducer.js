import { SET_VAGAS } from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_VAGAS:
			return {
				...state,
				vagas: action.payload.data,
			};
		default:
			return state;
	}
};
