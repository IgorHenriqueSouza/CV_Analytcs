import React, { useContext, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';

import CandidatoState from '../../context/candidato/CandidatoState';
import RecrutadorState from '../../context/recrutador/RecrutadorState';
import ApplicationContext from '../../context/application/applicationContext';
import AlertContext from '../../context/alert/alertContext';

const CadastroForm = ({ match }) => {
	const appContext = useContext(ApplicationContext);

	useEffect(() => {}, []);

	return <div class='container'></div>;
};

export default CadastroForm;
