import React, { useReducer, useContext } from 'react';
import RecrutadorReducer from './recrutadorReducer';
import RecrutadorContext from './recrutadorContext';
import ApplicationContext from '../application/applicationContext.js';
import AlertContext from '../../context/alert/alertContext';
import { Post, Get } from '../network';
import axios from 'axios';
import { SET_VAGAS } from '../types';

const RecrutadorState = props => {
	const initialState = {
		vagas: [],
	};

	const [state, dispatch] = useReducer(RecrutadorReducer, initialState);

	const appContext = useContext(ApplicationContext);
	const { setLoading, cancelLoading, apiURL, token } = appContext;

	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	// Listar vagas do servidor
	const fetchVagas = async () => {
		setLoading();
		if (!state.vagas || state.vagas.length === 0) {
			const res = await Get(`${apiURL}/vagas`, { token: token });
			console.log(res);

			if (res.error) {
				setAlert(res.error, 'danger');
			}
			dispatch({
				type: SET_VAGAS,
				payload: res,
			});
		}
		cancelLoading();
	};

	return (
		<RecrutadorContext.Provider
			value={{ vagas: state.vagas, fetchVagas: fetchVagas }}
		>
			{props.children}
		</RecrutadorContext.Provider>
	);
};

export default RecrutadorState;
