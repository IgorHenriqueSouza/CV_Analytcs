import React, { useReducer } from 'react';
import RecrutadorReducer from './recrutadorReducer';
import RecrutadorContext from './recrutadorContext';
import axios from 'axios';
import {} from '../types';

const RecrutadorState = props => {
	const initialState = {};

	return (
		<RecrutadorContext.Provider value={{}}>
			{props.children}
		</RecrutadorContext.Provider>
	);
};

export default RecrutadorState;
