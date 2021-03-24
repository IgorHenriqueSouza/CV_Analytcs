import {
	SET_VAGAS,
	FILTER_VAGAS,
	SET_VAGAS_PAGE,
	SET_VAGA,
	SET_USUARIOS,
	FILTER_USUARIOS,
	SET_USUARIOS_PAGE,
	SET_USUARIO_DETALHADO,
	CHANGE_VAGA_SKILL,
} from '../types';

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
		case CHANGE_VAGA_SKILL:
			return {
				...state,
				vagas: action.payload,
			};
		case SET_USUARIO_DETALHADO:
			return {
				...state,
				usuario: action.payload,
			};
		case SET_USUARIOS:
			return {
				...state,
				usuariosInit: action.payload.init,
				usuarios: action.payload.paginated,
			};
		case SET_USUARIOS_PAGE:
			return {
				...state,
				usuariosPage: action.payload,
			};
		case FILTER_USUARIOS:
			return {
				...state,
				usuariosFilter: action.payload.filter,
				usuarios: action.payload.usuarios,
			};
		default:
			return state;
	}
};
