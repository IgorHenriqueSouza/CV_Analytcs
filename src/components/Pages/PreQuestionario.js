import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Navbar from '../layout/Navbar';

import ApplicationContext from '../../context/application/applicationContext';
import CandidatoContext from '../../context/candidato/candidatoContext';
import Background from '../layout/Background';
import PreQuestionarioForm from '../mainForms/PreQuestionarioForm';

const PreQuestionario = () => {
	const appContext = useContext(ApplicationContext);
	const { validateUserType, isLoggedAndValidUser } = appContext;

	const candidatoContext = useContext(CandidatoContext);
	const { setPreQuestionarioStatus, preQuestionarioDone } = candidatoContext;

	useEffect(() => {
		validateUserType(['candidato']);
		if (isLoggedAndValidUser) setPreQuestionarioStatus();
	}, []);

	if (!isLoggedAndValidUser) return <Redirect to='/' />;
	else if (preQuestionarioDone) return <Redirect to='/prova' />;
	else {
		return (
			<div class='container-fluid main-padding'>
				<Navbar />
				<PreQuestionarioForm />
				<Background type='divisor' />
			</div>
		);
	}
};

export default PreQuestionario;
