import React, { useReducer, useContext } from 'react';
import RecrutadorReducer from './recrutadorReducer';
import RecrutadorContext from './recrutadorContext';
import ApplicationContext from '../application/applicationContext.js';
import AlertContext from '../../context/alert/alertContext';
import { Post, Get } from '../network';
import { ValidateForm } from '../../utils';
import {
	SET_VAGAS,
	FILTER_VAGAS,
	SET_VAGAS_PAGE,
	SET_VAGA,
	SET_USUARIOS,
	FILTER_USUARIOS,
	SET_USUARIOS_PAGE,
	SET_USUARIO_DETALHADO,
} from '../types';

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
		usuarioDetailed: {},
		usuariosInit: [],
		usuarios: [],
		usuariosFilter: null,
		usuariosPage: 1,
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

	//----------------------------------------------------------------------------------------------------------------
	//Vagas

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

	//----------------------------------------------------------------------------------------------------------------
	//USUARIOS

	// Listar usuarios do servidor
	const fetchUsuarios = async () => {
		setLoading();
		if (!state.usuariosInit || state.usuariosInit.length === 0) {
			const res = await Get(`${apiURL}/usuarios`, { token: token });

			if (res.error) {
				setAlert(res.error, 'danger');
			} else {
				let params = {
					init: res.data,
					paginated: setUsuariosFilter(null, res.data),
				};

				dispatch({
					type: SET_USUARIOS,
					payload: params,
				});
			}
		}
		cancelLoading();
	};

	//Filter usuarios
	const setUsuariosFilter = (filter = null, data = null, page = 1) => {
		let params = {};
		if (!data) {
			data = state.usuariosInit;
		}

		if (filter && filter.trim() !== '') {
			params.filter = filter;

			params.usuarios = data.filter(
				x =>
					x.nome.toLowerCase().includes(filter) ||
					x.sobrenome.toLowerCase().includes(filter) ||
					x.cpf.toLowerCase().includes(filter) ||
					x.email.toLowerCase().includes(filter) ||
					x.tipo.toLowerCase().includes(filter)
			);
		} else {
			params.filter = null;
			params.usuarios = data;
		}

		params.usuarios = getPagination(
			params.usuarios,
			state.resultsPerPage,
			page
		);

		console.log(params.usuarios);

		dispatch({
			type: FILTER_USUARIOS,
			payload: params,
		});

		return params.usuarios;
	};

	//update usuarios current page
	const setUsuariosPage = page => {
		dispatch({
			type: SET_USUARIOS_PAGE,
			payload: page,
		});
	};

	//get usuario
	const getUsuarioDetailedData = async id => {
		setLoading();

		const res = await Get(`${apiURL}/detailedUserData`, {
			token: token,
			id: id,
		});

		if (res.error) {
			setAlert(res.error, 'danger');
		}

		setUsuarioData(res.data);
		cancelLoading();
	};

	const setUsuarioData = data => {
		setLoading();
		dispatch({
			type: SET_USUARIO_DETALHADO,
			payload: data,
		});
		cancelLoading();
	};

	//Update Usuario
	const updateUsuario = async () => {
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

	//----------------------------------------------------------------------------------------------------------------

	return (
		<RecrutadorContext.Provider
			value={{
				//Vaga
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

				//Usuario
				usuarios: state.usuarios,
				usuarioDetailed: state.usuarioDetailed,
				usuariosInit: state.usuariosInit,
				usuariosFilter: state.usuariosFilter,
				usuariosPage: state.usuariosPage,
				fetchUsuarios,
				setUsuariosFilter,
			}}
		>
			{props.children}
		</RecrutadorContext.Provider>
	);
};

export default RecrutadorState;
