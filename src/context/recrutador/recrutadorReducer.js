import { SET_VAGAS, FILTER_VAGAS, SET_VAGAS_PAGE, SET_VAGA } from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_VAGA:
			return {
				...state,
				vaga: action.payload,
			};
		case SET_VAGAS_PAGE:
			return {
				...state,
				vagasPage: action.payload,
			};
		case SET_VAGAS:
			return {
				...state,
				vagasInit: action.payload.init,
				vagas: action.payload.paginated,
			};
		case FILTER_VAGAS:
			return {
				...state,
				vagasFilter: action.payload.filter,
				vagas: action.payload.vagas,
			};
		default:
			return state;
	}
};
