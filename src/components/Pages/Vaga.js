import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Navbar from '../layout/Navbar';
import VagaForm from '../mainForms/VagaForm';

import ApplicationContext from '../../context/application/applicationContext';
import RecrutadorContext from '../../context/recrutador/recrutadorContext';
import Background from '../layout/Background';

const Vaga = ({ match }) => {
	const appContext = useContext(ApplicationContext);
	const { validateUserType, isLoggedAndValidUser } = appContext;

	const recrutadorContext = useContext(RecrutadorContext);
	const { getVagaData } = recrutadorContext;

	const readOnly = match.params.edit === 'true' ? false : true;

	useEffect(() => {
		validateUserType(['recrutador']);

		getVagaData(match.params.id);
	}, []);

	if (!isLoggedAndValidUser) return <Redirect to='/' />;
	else {
		return (
			<div class='container-fluid main-padding'>
				<Navbar />
				<VagaForm readOnly={readOnly} />
				<Background type='divisor' />
			</div>
		);
	}
};

export default Vaga;
