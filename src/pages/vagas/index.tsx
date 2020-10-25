import React, { useEffect } from 'react';
import Movement from '../../components/movement';
import axios from 'axios';
import { Redirect, Link, Route } from 'react-router-dom';
import GerenciadorListItem from '../../components/gerenciadorListItem';
import './styles.css';

function Vagas() {
	var token = localStorage.getItem('token');

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
			<Movement title='CV Analitcs' />

			<main>
				<legend>Vagas Disponiveis</legend>

				<div className='jobs'>
					<GerenciadorListItem
						label='Desenvolvedor .NET'
						description='Desenvolvedor experiente .NET com 4 a 6 anos de experiência na área, preferencialmente com skills de UI/UX e soft skills'
						location='São Paulo - Brasil'
						id='1'
						type='vaga'
					></GerenciadorListItem>
					<GerenciadorListItem
						label='Desenvolvedor Java'
						description='Desenvolvedor experiente Java com 2 a 4 anos de experiência na área, preferencialmente com skills de back-end e soft skills'
						location='Rio de Janeiro - Brasil'
						id='1'
						type='vaga'
					></GerenciadorListItem>
				</div>
			</main>
		</div>
	);
}
export default Vagas;
