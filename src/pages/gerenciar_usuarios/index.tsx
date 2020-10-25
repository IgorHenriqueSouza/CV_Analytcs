import React from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

import './styles.css';

function GerenciarUsuarios() {
	return (
		<div id='manege-user' className='container'>
			<Navbar title='CV Analitcs' />

			<main>
				<legend>Gerenciar Usuários</legend>

				<div className='gerenciarVaga'>
					<Link to='/' className='user1'></Link>
				</div>
			</main>
		</div>
	);
}

export default GerenciarUsuarios;
