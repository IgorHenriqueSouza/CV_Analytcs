import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Navbar from '../layout/Navbar';
import PerfilForm from '../mainForms/PerfilForm';

import ApplicationContext from '../../context/application/applicationContext';
import Background from '../layout/Background';

const Perfil = ({ match }) => {
	const appContext = useContext(ApplicationContext);
	const {
		validateUserType,
		isLoggedAndValidUser,
		user,
		getUserData,
	} = appContext;

	useEffect(() => {
		if (match.params.cpf !== user.user) {
			validateUserType(['recrutador']);
		} else {
			validateUserType();
		}

		getUserData(match.params.cpf);
	}, []);

	if (!isLoggedAndValidUser) return <Redirect to='/' />;
	else {
		return (
			<div class='container-fluid main-padding'>
				<Navbar />
				<PerfilForm readOnly={true} />
				<Background type='divisor' />
			</div>
		);
	}
};

export default Perfil;
