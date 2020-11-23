import jwt_decode from 'jwt-decode';

import {
	SET_LOADING,
	SET_TOKEN,
	SET_USER,
	PERMISSION_TRUE,
	PERMISSION_FALSE,
	LOGOUT,
	CANCEL_LOADING,
	SET_REGISTER_DATA,
	CLEAR_REGISTER_DATA,
	CLEAR_REGISTER_FINISHED,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case CLEAR_REGISTER_FINISHED:
			return {
				...state,
				registerFinished: false,
				loading: false,
			};
		case CLEAR_REGISTER_DATA:
			return {
				...state,
				registerData: {
					nome: null,
					sobrenome: null,
					cpf: null,
					email: null,
					senha: null,
					senhaConfirm: null,
				},
				registerFinished: true,
				loading: false,
			};
		case SET_REGISTER_DATA:
			return {
				...state,
				registerData: action.payload,
				loading: false,
			};
		case PERMISSION_TRUE:
			return {
				...state,
				isLoggedAndValidUser: true,
				loading: false,
			};
		case PERMISSION_FALSE:
			return {
				...state,
				isLoggedAndValidUser: false,
				loading: false,
			};
		case SET_TOKEN:
			return {
				...state,
				token: action.payload.token,
				user: jwt_decode(action.payload.token),
				loading: false,
			};
		case SET_USER:
			return {
				...state,
				userProfile: action.payload,
				loading: false,
			};
		case LOGOUT:
			return {
				...state,
				token: null,
				user: null,
				isLoggedAndValidUser: false,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case CANCEL_LOADING:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};
