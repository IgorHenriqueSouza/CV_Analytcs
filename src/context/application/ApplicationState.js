import React, { useReducer, useContext } from 'react';
import ApplicationReducer from './applicationReducer';
import ApplicationContext from './applicationContext.js';
import AlertContext from '../../context/alert/alertContext';
import { Post, Get } from '../network';
import {
	SET_LOADING,
	CANCEL_LOADING,
	SET_TOKEN,
	SET_USER,
	PERMISSION_TRUE,
	PERMISSION_FALSE,
	LOGOUT,
} from '../types';

const apiURL = 'http://localhost:5000';

const ApplicationState = props => {
	const initialState = {
		token: null,
		loading: false,
		userProfile: null,
		user: null,
		isLoggedAndValidUser: true,
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
		if (
			state.user &&
			state.user.type &&
			param.find(x => x === state.user.type)
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
	const getUserData = async token => {
		if (token) {
			setLoading();
			const res = await Get(`${apiURL}/perfil`, { token: token });

			if (res.error) {
				setAlert(res.error, 'danger');
			}

			dispatch({
				type: SET_USER,
				payload: res.data,
			});
		}
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

	//Set loged in
	const userAllowed = allowed => {
		if (allowed) dispatch({ type: PERMISSION_TRUE });
		else dispatch({ type: PERMISSION_FALSE });
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
			}}
		>
			{props.children}
		</ApplicationContext.Provider>
	);
};

export default ApplicationState;
