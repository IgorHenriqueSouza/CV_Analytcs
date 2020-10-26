import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { Redirect, Link, Route, useHistory } from 'react-router-dom';
import GerenciadorListItem from '../../components/GerenciadorListItem';
import './styles.css';

function GerenciarVagas() {
	let token = localStorage.getItem('token');
	let history = useHistory();

	let editarVaga = id => {
		history.push('/editarVaga/' + id);
	};

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_API_URL + '/vagas?token=' + token)
			.then(response => {})
			.catch(error => {
				//alert(error.response.data.message);
				//window.location.replace('/');
			});
	});

	return (
		<div id='vagas' className='container'>
			<Navbar title='CV Analitcs' />

			<main>
				<legend>Vagas Disponiveis</legend>

				<div className='jobs'>
					<button className='btn-main' onClick={() => editarVaga(null)}>
						Adicionar
					</button>
					<GerenciadorListItem
						nome='Desenvolvedor .NET'
						descricao='Desenvolvedor experiente .NET com 4 a 6 anos de experiência na área, preferencialmente com skills de UI/UX e soft skills'
						local='São Paulo - Brasil'
						id='1'
						tipo='vaga'
					></GerenciadorListItem>
					<GerenciadorListItem
						nome='Desenvolvedor Java'
						descricao='Desenvolvedor experiente Java com 2 a 4 anos de experiência na área, preferencialmente com skills de back-end e soft skills'
						local='Rio de Janeiro - Brasil'
						id='1'
						tipo='vaga'
					></GerenciadorListItem>
				</div>
			</main>
		</div>
	);
}
export default GerenciarVagas;
