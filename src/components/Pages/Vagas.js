import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Navbar from '../layout/Navbar';
import VagasMenu from '../recrutador/VagasMenu';

import ApplicationContext from '../../context/application/applicationContext';
import Background from '../layout/Background';

const Vagas = () => {
	const appContext = useContext(ApplicationContext);
	const { validateUserType, isLoggedAndValidUser, setRedirectURL } = appContext;

	useEffect(() => {
		validateUserType(['recrutador']);
	}, []);

	if (!isLoggedAndValidUser) return <Redirect to='/' />;
	else {
		return (
			<div class='container-fluid main-padding'>
				<Navbar />
				<VagasMenu />
				<Background type='divisor' />
			</div>
		);
	}
};

export default Vagas;
