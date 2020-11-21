import React, { useContext, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';

import CandidatoState from '../../context/candidato/CandidatoState';
import RecrutadorState from '../../context/recrutador/RecrutadorState';
import ApplicationContext from '../../context/application/applicationContext';
import AlertContext from '../../context/alert/alertContext';
import LoginForm from '../mainForms/LoginForm';
import CadastroForm from '../mainForms/CadastroForm';
import Background from '../layout/Background';

const Login = ({ match }) => {
	const appContext = useContext(ApplicationContext);
	const { validateUserType, isLoggedAndValidUser } = appContext;

	useEffect(() => {
		validateUserType(match.params.tipo, false);
	}, []);

	if (!isLoggedAndValidUser)
		return (
			<div class='container-fluid'>
				<Navbar />
				<LoginForm />
				<Background type='divisor' />
			</div>
		);
	else {
		return (
			<div class='container'>
				<Navbar />
				<CadastroForm />
			</div>
		);
	}
};

export default Login;
