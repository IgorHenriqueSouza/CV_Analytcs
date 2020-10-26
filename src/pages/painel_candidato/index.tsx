import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import Navbar from '../../components/Navbar';
import './styles.css';

function PainelCandidato() {
	return (
		<div id='painel-form' className='container'>
			<Navbar title='CV Analitcs' description='' />
			<main>
				<legend></legend>
			</main>
		</div>
	);
}

export default PainelCandidato;
