import PreQuestionario from '../../components/Pages/PreQuestionario';
import {
	SET_PRE_QUESTIONARIO_STATUS,
	SET_PRE_QUESTIONARIO,
	SEND_PRE_QUESTIONARIO,
} from '../types';

export default (state, action) => {
	switch (action.type) {
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
