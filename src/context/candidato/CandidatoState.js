import React, { useReducer, useContext } from 'react';
import CandidatoReducer from './candidatoReducer';
import CandidatoContext from './candidatoContext';
import ApplicationContext from '../application/applicationContext.js';
import AlertContext from '../../context/alert/alertContext';
import { Post, Get } from '../network';
import { ValidateForm } from '../../utils';
import {
	SET_PRE_QUESTIONARIO_STATUS,
	SET_PRE_QUESTIONARIO,
	SEND_PRE_QUESTIONARIO,
	SET_PROVA_STATUS,
	SET_PROVA,
	SEND_PROVA,
} from '../types';

const CandidatoState = props => {
	const initialState = {
		preQuestionarioDone: null,
		provaDone: null,
		preQuestionario: {
			xp: null,
			sql: null,
			javascript: null,
			agile: null,
			php: null,
		},
		prova: null,
	};

	const [state, dispatch] = useReducer(CandidatoReducer, initialState);

	const appContext = useContext(ApplicationContext);
	const { setLoading, cancelLoading, apiURL, token } = appContext;

	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const setProvaData = async () => {
		setLoading();

		const res = await Get(`${apiURL}/prova/questoes`, {
			token: token,
		});

		if (res.error) {
			setAlert(res.error, 'danger');
		} else if (res.data) {
			let parsed = res.data.map(x => {
				let replace = x.opcoes.replace(/'/g, '"');
				x.opcoes = JSON.parse(replace);

				return x;
			});

			setProva(parsed);
		}

		cancelLoading();
	};

	const setPreQuestionarioStatus = async () => {
		setLoading();

		const res = await Get(`${apiURL}/prequestionario/isdone`, {
			token: token,
		});

		if (res.error) {
			setAlert(res.error, 'danger');
		} else if (res.data.result) {
			setAlert(
				'Pré cadastro concluído anteriormente com sucesso! Por favor prossiga para a prova.',
				'primary'
			);
		}

		dispatch({
			type: SET_PRE_QUESTIONARIO_STATUS,
			payload: res,
		});

		cancelLoading();
	};

	const setProvaStatus = async () => {
		setLoading();

		const res = await Get(`${apiURL}/prova/isdone`, {
			token: token,
		});

		if (res.error) {
			setAlert(res.error, 'danger');
		}

		dispatch({
			type: SET_PROVA_STATUS,
			payload: res,
		});

		cancelLoading();
	};

	const sendPreQuestionario = async () => {
		setLoading();

		if (ValidateForm(state.preQuestionario)) {
			const res = await Post(
				`${apiURL}/prequestionario?token=${token}`,
				state.preQuestionario
			);

			if (res.error) {
				setAlert(res.error, 'danger');
			} else {
				dispatch({
					type: SEND_PRE_QUESTIONARIO,
				});

				setAlert(
					'Pré cadastro concluído com sucesso! Por favor prossiga para a prova.',
					'primary'
				);
			}
		} else {
			setAlert(
				'Erro ao validar formulário, preencha todos os campos corretamente.',
				'primary'
			);
		}
		cancelLoading();
	};

	const sendProva = async () => {
		setLoading();

		if (ValidateForm(state.prova)) {
			const res = await Post(`${apiURL}/prova?token=${token}`, state.prova);

			if (res.error) {
				setAlert(res.error, 'danger');
			} else {
				dispatch({
					type: SEND_PROVA,
				});

				setAlert('Prova concluída com sucesso!', 'primary');
			}
		} else {
			setAlert(
				'Erro ao validar formulário, preencha todos os campos corretamente.',
				'primary'
			);
		}
		cancelLoading();
	};

	const setPreQuestionario = data => {
		setLoading();
		dispatch({
			type: SET_PRE_QUESTIONARIO,
			payload: data,
		});
		cancelLoading();
	};

	const setProva = data => {
		setLoading();
		dispatch({
			type: SET_PROVA,
			payload: data,
		});
		cancelLoading();
	};

	return (
		<CandidatoContext.Provider
			value={{
				preQuestionarioDone: state.preQuestionarioDone,
				setPreQuestionarioStatus: setPreQuestionarioStatus,
				setPreQuestionario: setPreQuestionario,
				preQuestionario: state.preQuestionario,
				sendPreQuestionario: sendPreQuestionario,
				setProvaStatus: setProvaStatus,
				provaDone: state.provaDone,
				sendProva: sendProva,
				setProva: setProva,
				prova: state.prova,
				setProvaData: setProvaData,
			}}
		>
			{props.children}
		</CandidatoContext.Provider>
	);
};

export default CandidatoState;
