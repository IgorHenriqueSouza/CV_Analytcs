import React, { useState } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader';
import Navbar from '../../components/Navbar';
import { useParams, useHistory } from 'react-router-dom';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Input from '../../components/Input';

function PreQuestionairo() {
	const history = useHistory();
	const token = localStorage.getItem('token');

	const EnviarFormulario = (e: React.FormEvent) => {
		e.preventDefault();
		let post = {};
		axios
			.post(process.env.REACT_APP_API_URL + '/cadastro', post)
			.then(function (response) {
				if (response.status === 200) {
					alert('Dados enviados com sucesso!');
					history.push('/candidate_panel');
				}
			})
			.catch(function (error) {
				// handle error

				if (error.response) alert(error.response.data.message);
				else {
					alert('Erro ao contactar servidor');
				}
			});
	};

	return (
		<div id='page-teacher-form' className='container'>
			<Navbar
				title='CV Analitcs'
				description='Por favor, preencha os dados abaixo para que possamos te conhecer melhor.'
			/>
			<main>
				<form onSubmit={EnviarFormulario}>
					<footer>
						<p>
							<img src={warningIcon} alt='Aviso importante' />
							Importante! <br />
							Preencha todos os dados
						</p>
						<button type='submit'>Enviar Formulário</button>
					</footer>
				</form>
			</main>
		</div>
	);
}

export default PreQuestionairo;