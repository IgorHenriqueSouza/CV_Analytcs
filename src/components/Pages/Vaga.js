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
	const { getVagaData, setVagaData } = recrutadorContext;

	const readOnly = match.params.edit === 'true' ? false : true;
	const isNew = match.params.edit === 'new' ? true : false;

	useEffect(() => {
		validateUserType(['recrutador']);

		if (match.params.id && match.params.id !== 'null')
			getVagaData(match.params.id);
		else {
			setVagaData({
				id: null,
				nome: null,
				descricao: null,
				local: 'SP - São Paulo',
				parametros: [{ skill: null, nivel: null }],
			});
		}
	}, []);

	if (!isLoggedAndValidUser) return <Redirect to='/' />;
	else {
		return (
			<div class='container-fluid main-padding'>
				<Navbar />
				<VagaForm readOnly={readOnly} isNew={isNew} />
				<Background type='divisor' />
			</div>
		);
	}
};

export default Vaga;
