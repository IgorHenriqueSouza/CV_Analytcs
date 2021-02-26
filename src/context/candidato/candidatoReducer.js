import PreQuestionario from '../../components/Pages/PreQuestionario';
import {
	SET_PRE_QUESTIONARIO_STATUS,
	SET_PRE_QUESTIONARIO,
	SEND_PRE_QUESTIONARIO,
	SET_PROVA_STATUS,
	SET_PROVA,
	SEND_PROVA,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_PROVA_STATUS:
			return {
				...state,
				provaDone: action.payload.data.result,
			};
		case SET_PROVA:
			return {
				...state,
				prova: action.payload,
			};
		case SEND_PROVA:
			return {
				...state,
				provaDone: true,
			};
		case SET_PRE_QUESTIONARIO:
			return {
				...state,
				preQuestionario: action.payload,
			};
		case SEND_PRE_QUESTIONARIO:
			return {
				...state,
				preQuestionarioDone: true,
				preQuestionario: {
					anos: null,
					bd: null,
					js: null,
					scrum: null,
					php: null,
				},
			};
		case SET_PRE_QUESTIONARIO_STATUS:
			return {
				...state,
				preQuestionarioDone: action.payload.data.result,
			};
		default:
			return state;
	}
};
