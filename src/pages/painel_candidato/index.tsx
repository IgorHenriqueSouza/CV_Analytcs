import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import jwt from 'jwt-decode';
import Navbar from '../../components/Navbar';
import './styles.css';

function PainelCandidato() {
	let token = localStorage.getItem('token');
	let user = jwt(token);

	if (user.type.includes('recrutador')) {
		alert('Acesso não autorizado!');
		return (
			<div id='painel-form' className='container'>
				<Navbar title='CV Analytics' description='Painel do Candidato' />
				<main>
					<legend></legend>
				</main>
			</div>
		);
	} else {
		return (
			<div id='painel-form' className='container'>
				<Navbar title='CV Analytics' description='Painel do Candidato' />
				<main>
					<legend></legend>
				</main>
			</div>
		);
	}
}

export default PainelCandidato;
