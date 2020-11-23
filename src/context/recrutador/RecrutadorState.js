import React, { useReducer, useContext } from 'react';
import RecrutadorReducer from './recrutadorReducer';
import RecrutadorContext from './recrutadorContext';
import ApplicationContext from '../application/applicationContext.js';
import AlertContext from '../../context/alert/alertContext';
import { Post, Get } from '../network';
import { ValidateForm } from '../../utils';
import { SET_VAGAS, FILTER_VAGAS, SET_VAGAS_PAGE, SET_VAGA } from '../types';

const RecrutadorState = props => {
	const initialState = {
		vagasInit: [],
		vagas: [],
		vagasFilter: null,
		vagasPage: 1,
		resultsPerPage: 5,
		vaga: {
			id: null,
			nome: null,
			descricao: null,
			local: null,
		},
	};

	const [state, dispatch] = useReducer(RecrutadorReducer, initialState);

	const appContext = useContext(ApplicationContext);
	const {
		setLoading,
		cancelLoading,
		apiURL,
		token,
		getPagination,
	} = appContext;

	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	// Listar vagas do servidor
	const fetchVagas = async () => {
		setLoading();
		if (!state.vagasInit || state.vagasInit.length === 0) {
			const res = await Get(`${apiURL}/vagas`, { token: token });

			if (res.error) {
				setAlert(res.error, 'danger');
			} else {
				let params = {
					init: res.data,
					paginated: setVagasFilter(null, res.data),
				};

				dispatch({
					type: SET_VAGAS,
					payload: params,
				});
			}
		}
		cancelLoading();
	};

	//Filter vagas
	const setVagasFilter = (filter = null, data = null, page = 1) => {
		let params = {};
		if (!data) {
			data = state.vagasInit;
		}

		if (filter && filter.trim() !== '') {
			params.filter = filter;

			params.vagas = data.filter(
				x =>
					x.local.toLowerCase().includes(filter) ||
					x.nome.toLowerCase().includes(filter) ||
					x.descricao.toLowerCase().includes(filter)
			);
		} else {
			params.filter = null;
			params.vagas = data;
		}

		params.vagas = getPagination(params.vagas, state.resultsPerPage, page);

		console.log(params.vagas);

		dispatch({
			type: FILTER_VAGAS,
			payload: params,
		});

		return params.vagas;
	};

	//update vagas current page
	const setVagasPage = page => {
		dispatch({
			type: SET_VAGAS_PAGE,
			payload: page,
		});
	};

	//get vaga
	const getVagaData = async id => {
		setLoading();

		const res = await Get(`${apiURL}/vaga`, {
			token: token,
			id: id,
		});

		if (res.error) {
			setAlert(res.error, 'danger');
		}

		setVagaData(res.data);
		cancelLoading();
	};

	const setVagaData = data => {
		setLoading();
		dispatch({
			type: SET_VAGA,
			payload: data,
		});
		cancelLoading();
	};

	//Update Vaga
	const updateVaga = async () => {
		setLoading();
		if (ValidateForm(state.vaga)) {
			const res = await Post(`${apiURL}/saveVaga?token=${token}`, state.vaga);

			if (res.error) {
				setAlert(res.error, 'danger');
			}

			if (res.data && res.data.id) setVagaData(res.data);

			setAlert(res.data.message, 'primary');
		} else {
			setAlert(
				'Erro ao validar formulário, preencha todos os campos corretamente.',
				'primary'
			);
		}

		cancelLoading();
	};

	return (
		<RecrutadorContext.Provider
			value={{
				vagas: state.vagas,
				vaga: state.vaga,
				vagasFilter: state.vagasFilter,
				fetchVagas: fetchVagas,
				setVagasFilter: setVagasFilter,
				vagasInit: state.vagasInit,
				resultsPerPage: state.resultsPerPage,
				setVagasPage: setVagasPage,
				getVagaData: getVagaData,
				setVagaData: setVagaData,
				updateVaga: updateVaga,
			}}
		>
			{props.children}
		</RecrutadorContext.Provider>
	);
};

export default RecrutadorState;
