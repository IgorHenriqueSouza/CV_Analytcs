import React, { useReducer, useContext } from 'react';
import AlertContext from './context/alert/alertContext';

export const ValidateForm = obj => {
	let keys = Object.keys(obj);

	if (keys.length == 0) {
		return false;
	}

	for (let key of keys) {
		let val = obj[key].trim();

		if (!(val && val !== '')) {
			return false;
		}
	}

	return true;
};
