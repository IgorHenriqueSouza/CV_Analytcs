import React, { useContext, useEffect, useState } from 'react';
import AlertContext from '../context/alert/alertContext';
import axios from 'axios';

export const Post = async (url, payload, headers = {}) => {
	let output = { success: true, error: '', data: {} };

	const res = await axios
		.post(url, payload, { headers: headers })
		.then(response => {
			if (response && response.data) {
				output.data = response.data;
			}
		})
		.catch(function (error) {
			if (error.response) {
				console.log(error.response.data);
				output.error = error.response.data.message;
			} else if (error.request) {
				console.log(error.request);
				output.error =
					'Não foi possível contatar o servidor, por favor tente mais tarde.';
			} else {
				console.log(error.message);
				output.error =
					'Um erro ocorreu, por favor entre em contato com os integrantes do grupo CV Analytics.';
			}

			output.success = false;
		});

	console.log('Post output:');
	console.log(output);

	return output;
};

export const Get = async (url, payload, headers = {}) => {
	let output = { success: true, error: '', data: {} };

	const res = await axios
		.get(url, { params: payload }, headers)
		.then(response => {
			if (response && response.data) {
				output.data = response.data;
			}
		})
		.catch(function (error) {
			if (error.response) {
				console.log(error.response.data);
				output.error = error.response.data.message;
			} else if (error.request) {
				console.log(error.request);
				output.error =
					'Não foi possível contatar o servidor, por favor tente mais tarde.';
			} else {
				console.log(error.message);
				output.error =
					'Um erro ocorreu, por favor entre em contato com os integrantes do grupo CV Analytics.';
			}

			output.success = false;
		});

	console.log('Post output:');
	console.log(output);

	return output;
};
