import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Navbar from '../layout/Navbar';

import ApplicationContext from '../../context/application/applicationContext';
import LoginForm from '../mainForms/LoginForm';
import Background from '../layout/Background';

const Login = ({ match }) => {
	const appContext = useContext(ApplicationContext);
	const { validateUserType, token } = appContext;
	const type = match.params.tipo;

	if (!token)
		return (
			<div class='container-fluid main-padding'>
				<Navbar />
				<LoginForm type={type} />
				<Background type='divisor' />
			</div>
		);
	else {
		return <Redirect to='/' />;
	}
};

export default Login;
