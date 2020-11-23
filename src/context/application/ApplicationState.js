import React, { useReducer, useContext } from 'react';
import ApplicationReducer from './applicationReducer';
import ApplicationContext from './applicationContext.js';
import AlertContext from '../../context/alert/alertContext';
import { ValidateForm } from '../../utils';
import { Post, Get } from '../network';
import {
	SET_LOADING,
	CANCEL_LOADING,
	SET_TOKEN,
	SET_USER,
	PERMISSION_TRUE,
	PERMISSION_FALSE,
	LOGOUT,
	SET_REGISTER_DATA,
	CLEAR_REGISTER_DATA,
	CLEAR_REGISTER_FINISHED,
} from '../types';

const apiURL = 'http://localhost:5000';

const ApplicationState = props => {
	const initialState = {
		token: null,
		loading: false,
		userProfile: {
			id: null,
			nome: null,
			sobrenome: null,
			cpf: null,
			email: null,
			tipo: null,
			ativo: false,
		},
		user: null,
		isLoggedAndValidUser: true,
		registerData: {
			nome: null,
			sobrenome: null,
			cpf: null,
			email: null,
			senha: null,
			senhaConfirm: null,
		},
		registerFinished: false,
	};
	const [state, dispatch] = useReducer(ApplicationReducer, initialState);

	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	//Set token from local storage
	const setToken = () => {
		let localToken = localStorage.getItem('token');

		if (localToken && !state.token) {
			dispatch({
				type: SET_TOKEN,
				payload: { token: localToken },
			});
		}
	};

	setToken();

	//Validate user type
	const validateUserType = async (param, showAlert = true) => {
		param =
			!param || (param && param.length === 0)
				? ['recrutador', 'candidato']
				: param;
		if (
			state.user &&
			state.user.type &&
			(param.find(x => x === state.user.type) || state.user.type === 'admin')
		) {
			if (!state.isLoggedAndValidUser) {
				userAllowed(true);
			}
		} else {
			if (state.isLoggedAndValidUser) {
				userAllowed(false);
			}
			if (showAlert) setAlert('Usuário não autorizado!', 'danger');
		}
	};

	//Login User
	const loginUser = async form => {
		if (form.CPF && form.password && form.CPF !== '' && form.password !== '') {
			setLoading();

			const loginToken = btoa(`${form.CPF}:${form.password}`);
			const res = await Post(`${apiURL}/login`, null, {
				Authorization: `Basic ${loginToken}`,
			});

			if (res.error) {
				setAlert(res.error, 'danger');
				cancelLoading();
			} else {
				localStorage.setItem('token', res.data.token);

				setToken();
			}
		} else {
			setAlert(
				'Por favor preencha os campos "CPF" e "Senha" para prosseguir',
				'primary'
			);
		}
	};

	//Get User Data
	const getUserData = async cpf => {
		if (state.token) {
			setLoading();
			if (
				!(state.userProfile && state.userProfile.id) ||
				(state.userProfile &&
					state.userProfile.cpf &&
					cpf != state.userProfile.cpf)
			) {
				const res = await Get(`${apiURL}/perfil`, {
					token: state.token,
					cpf: cpf,
				});

				if (res.error) {
					setAlert(res.error, 'danger');
				}

				dispatch({
					type: SET_USER,
					payload: res.data,
				});
			} else {
				cancelLoading();
			}
		}
	};

	//Paginate
	const getPagination = (array, resultsPerPage, page) => {
		const pageCount = Math.ceil(array.length / resultsPerPage);

		const mult = page * resultsPerPage;

		return page !== null
			? array.slice(mult - resultsPerPage, mult)
			: array.slice(0, resultsPerPage);
	};

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	//Cancel Loading
	const cancelLoading = () => dispatch({ type: CANCEL_LOADING });

	//Logout
	const logout = () => {
		setLoading();
		localStorage.removeItem('token');
		dispatch({ type: LOGOUT });
		setAlert('Obrigado por participar do nosso processo!', 'primary');
	};

	//Create new user
	const registerUser = async () => {
		setLoading();

		if (ValidateForm(state.registerData)) {
			if (
				state.registerData.senha &&
				state.registerData.senhaConfirm &&
				state.registerData.senha != state.registerData.senhaConfirm
			) {
				setAlert('As senhas não batem', 'danger');
			} else {
				const res = await Post(`${apiURL}/cadastro`, state.registerData);

				if (res.error) {
					setAlert(res.error, 'danger');
				} else {
					dispatch({
						type: CLEAR_REGISTER_DATA,
						payload: res.data,
					});

					setAlert(res.data.message, 'primary');
				}
			}
		} else {
			setAlert(
				'Erro ao validar formulário, preencha todos os campos corretamente.',
				'primary'
			);
		}

		cancelLoading();
	};

	//Set Register Data
	const setRegisterData = (data, tipo) => {
		data.tipo = tipo;

		dispatch({
			type: SET_REGISTER_DATA,
			payload: data,
		});
	};

	//Set loged in
	const userAllowed = allowed => {
		if (allowed) dispatch({ type: PERMISSION_TRUE });
		else dispatch({ type: PERMISSION_FALSE });
	};

	const clearRegisterFinished = () => {
		dispatch({
			type: CLEAR_REGISTER_FINISHED,
		});
	};

	return (
		<ApplicationContext.Provider
			value={{
				loading: state.loading,
				token: state.token,
				user: state.user,
				userProfile: state.userProfile,
				isLoggedAndValidUser: state.isLoggedAndValidUser,
				validateUserType: validateUserType,
				loginUser: loginUser,
				setToken: setToken,
				logout: logout,
				setLoading: setLoading,
				cancelLoading: cancelLoading,
				apiURL: apiURL,
				getPagination: getPagination,
				getUserData: getUserData,
				registerData: state.registerData,
				registerUser: registerUser,
				setRegisterData: setRegisterData,
				registerFinished: state.registerFinished,
				clearRegisterFinished,
			}}
		>
			{props.children}
		</ApplicationContext.Provider>
	);
};

export default ApplicationState;
