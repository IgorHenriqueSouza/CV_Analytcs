import React, { useReducer, useContext } from 'react';
import ApplicationReducer from './applicationReducer';
import ApplicationContext from './applicationContext.js';
import AlertContext from '../../context/alert/alertContext';
import axios from 'axios';
import { SET_LOADING } from '../types';

let apiURL = 'http://localhost:5000';

const GithubState = props => {
	const initialState = {
		token: null,
		loading: true,
		user: null,
		isLoggedAndValidUser: false,
	};

	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const [state, dispatch] = useReducer(ApplicationReducer, initialState);

	//Validate user type
	const validateUserType = (param, showAlert = true) => {
		if (state.token && state.user.tipo === param) {
			state.isLoggedAndValidUser = true;
		}
		if (showAlert) setAlert('Usuário não autorizado!', 'danger');

		state.isLoggedAndValidUser = false;
	};

	// Get All users
	// const getUsers = async username => {
	// 	setLoading();

	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
	// 	);

	// 	dispatch({
	// 		type: GET_USERS,
	// 		payload: res.data,
	// 	});
	// };

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<ApplicationContext.Provider
			value={{
				loading: state.loading,
				token: state.token,
				user: state.user,
				validateUserType: validateUserType,
				isLoggedAndValidUser: state.isLoggedAndValidUser,
			}}
		>
			{props.children}
		</ApplicationContext.Provider>
	);
};

export default GithubState;
