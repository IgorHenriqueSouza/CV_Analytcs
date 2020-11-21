import React, { useContext, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';

import CandidatoState from '../../context/candidato/CandidatoState';
import RecrutadorState from '../../context/recrutador/RecrutadorState';
import ApplicationContext from '../../context/application/applicationContext';
import AlertContext from '../../context/alert/alertContext';

const LoginForm = ({ match }) => {
	const appContext = useContext(ApplicationContext);

	useEffect(() => {}, []);

	return (
		<div class='container main-container rounded shadow'>
			<div class='card'>
				<div class='card-header'>Featured</div>
				<div class='card-body'>
					<h5 class='card-title'>Special title treatment</h5>
					<p class='card-text'>
						With supporting text below as a natural lead-in to additional
						content.
					</p>
					<a href='#' class='btn btn-primary'>
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
