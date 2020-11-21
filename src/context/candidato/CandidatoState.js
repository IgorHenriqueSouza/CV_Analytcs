import React, { useReducer } from 'react';
import CandidatoReducer from './candidatoReducer';
import CandidatoContext from './candidatoContext';
import axios from 'axios';
import {} from '../types';

const CandidatoState = props => {
	const initialState = {};

	return (
		<CandidatoState.Provider value={{}}>
			{props.children}
		</CandidatoState.Provider>
	);
};

export default CandidatoState;
