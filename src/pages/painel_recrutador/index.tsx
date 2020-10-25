import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import Navbar from '../../components/Navbar';
import './styles.css';

function PainelRecrutador() {
	return (
		<div id='panel' className='container'>
			<Navbar title='CV Analitcs' />
			<main>
				<legend>Painel do Recrutador</legend>
				<div className='painel'>
					<Link to='/' className='modules'>
						<img src={backIcon} alt='IR' />
						Visualização dos Resultados
					</Link>

					<Link to='/gerenciarUser' className='modules'>
						<img src={backIcon} alt='IR' />
						Usuários
					</Link>

					<Link to='/vagas' className='modules'>
						<img src={backIcon} alt='IR' />
						Gerenciar Vagas
					</Link>

					<Link to='/' className='modules'>
						<img src={backIcon} alt='IR' />
						Gerenciar Provas
					</Link>
				</div>
			</main>
		</div>
	);
}

export default PainelRecrutador;