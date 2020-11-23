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
} from '../types';

const CandidatoState = props => {
	const initialState = {
		preQuestionarioDone: false,
		preQuestionario: { anos: null, bd: null, js: null, scrum: null, php: null },
	};

	const [state, dispatch] = useReducer(CandidatoReducer, initialState);

	const appContext = useContext(ApplicationContext);
	const { setLoading, cancelLoading, apiURL, token } = appContext;

	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const setPreQuestionarioStatus = async () => {
		setLoading();

		const res = await Get(`${apiURL}/prequestionario/isdone`, {
			token: token,
		});

		if (res.error) {
			setAlert(res.error, 'danger');
		}

		dispatch({
			type: SET_PRE_QUESTIONARIO_STATUS,
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

	const setPreQuestionario = data => {
		setLoading();
		dispatch({
			type: SET_PRE_QUESTIONARIO,
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
			}}
		>
			{props.children}
		</CandidatoContext.Provider>
	);
};

export default CandidatoState;
