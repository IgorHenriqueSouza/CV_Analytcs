import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Navbar from '../layout/Navbar';

import ApplicationContext from '../../context/application/applicationContext';
import Background from '../layout/Background';

const PreQuestionario = () => {
	const appContext = useContext(ApplicationContext);
	const { validateUserType, isLoggedAndValidUser, setRedirectURL } = appContext;

	useEffect(() => {
		setRedirectURL('/preQuestionario');
		validateUserType(['candidato']);
	}, []);

	if (!isLoggedAndValidUser) return <Redirect to='/' />;
	else {
		return (
			<div class='container'>
				<Navbar />
				PAINEL
				<Background type='divisor' />
			</div>
		);
	}
};

export default PreQuestionario;
