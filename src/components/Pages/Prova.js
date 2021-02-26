import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Navbar from '../layout/Navbar';

import ApplicationContext from '../../context/application/applicationContext';
import CandidatoContext from '../../context/candidato/candidatoContext';
import Background from '../layout/Background';
import ProvaForm from '../mainForms/ProvaForm';
import Agradecimento from '../candidato/Agradecimento';
import ErroFatal from '../candidato/ErroFatal';

const Prova = () => {
	const appContext = useContext(ApplicationContext);
	const { validateUserType, isLoggedAndValidUser } = appContext;

	const candidatoContext = useContext(CandidatoContext);
	const { setProvaStatus, provaDone } = candidatoContext;

	useEffect(() => {
		validateUserType(['candidato']);
		if (isLoggedAndValidUser) setProvaStatus();
	}, []);

	if (!isLoggedAndValidUser) return <Redirect to='/' />;
	else if (provaDone) {
		return (
			<div class='container-fluid main-padding'>
				<Navbar />
				<Agradecimento />
				<Background type='divisor' />
			</div>
		);
	} else {
		return (
			<div class='container-fluid main-padding'>
				<Navbar />
				<ProvaForm />
				<Background type='divisor' />
			</div>
		);
	}
};

export default Prova;
