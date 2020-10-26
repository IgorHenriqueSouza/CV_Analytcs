import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import Navbar from '../../components/Navbar';
import './styles.css';

function PainelRecrutador() {
	return (
		<div id='panel' className='container'>
			<Navbar title='CV Analitcs' description='Painel do Recrutador' />
			<main>
				<legend></legend>
				<div className='painel'>
					<Link to='/' className='modules'>
						Visualização dos Resultados
					</Link>

					<Link to='/gerenciarUser' className='modules'>
						Usuários
					</Link>

					<Link to='/vagas' className='modules'>
						Gerenciar Vagas
					</Link>

					<Link to='/' className='modules'>
						Gerenciar Provas
					</Link>
				</div>
			</main>
		</div>
	);
}

export default PainelRecrutador;
