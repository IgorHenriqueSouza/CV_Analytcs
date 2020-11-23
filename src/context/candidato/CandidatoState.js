import React, { useReducer } from 'react';
import CandidatoReducer from './candidatoReducer';
import CandidatoContext from './candidatoContext';
import axios from 'axios';
import {} from '../types';

const CandidatoState = props => {
	const initialState = {};

	return (
		<CandidatoContext.Provider value={{}}>
			{props.children}
		</CandidatoContext.Provider>
	);
};

export default CandidatoState;
