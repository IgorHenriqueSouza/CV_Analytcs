import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Navbar from '../layout/Navbar';

import ApplicationContext from '../../context/application/applicationContext';
import CadastroForm from '../mainForms/CadastroForm';

const Cadastro = ({ match }) => {
	const appContext = useContext(ApplicationContext);
	const { validateUserType, token } = appContext;
	const type = match.params.tipo;

	if (!token)
		return (
			<div class='container-fluid main-padding'>
				<Navbar />
				<CadastroForm type={type} />
			</div>
		);
	else {
		return <Redirect to='/' />;
	}
};

export default Cadastro;
