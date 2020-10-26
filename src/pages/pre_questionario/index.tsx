import React, { useState } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import PageHeader from '../../components/PageHeader';
import Navbar from '../../components/Navbar';
import { useParams, useHistory } from 'react-router-dom';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Input from '../../components/Input';

function PreQuestionairo() {
	const history = useHistory();
	const token = localStorage.getItem('token');

	const [anos, setAnos] = useState('');
	const [scrum, setScrum] = useState('');
	const [js, setJs] = useState('');
	const [bd, setBd] = useState('');
	const [php, setPhp] = useState('');

	const verifica = async () => {
		if (token) {
			let credentials = jwt(token);
			if (credentials.user) {
				await axios
					.get(
						process.env.REACT_APP_API_URL +
							'/prequestionario/verifica?token=' +
							token
					)
					.then(function (response) {
						if (response.status === 200) {
							return true;
						}
					});
			}
		}

		return false;
	};

	const EnviarFormulario = (e: React.FormEvent) => {
		e.preventDefault();
		let post = {};

		axios
			.post(process.env.REACT_APP_API_URL + '/cadastro', post)
			.then(function (response) {
				if (response.status === 200) {
					alert('Dados enviados com sucesso!');
					history.push('/painel_candidato');
				}
			})
			.catch(function (error) {
				if (error.response) {
					if (error.status === 401 || error.status === 403) {
						localStorage.removeItem('token');
						history.push('/');
					} else alert(error.response.data.message);
				} else {
					alert('Erro ao contactar servidor');
				}
			});
	};

	let verificado = verifica();

	if (!verificado) {
		localStorage.removeItem('token');
		history.push('/');
		alert('Usuário não autorizado!');
		return <div></div>;
	} else {
		return (
			<div id='page-teacher-form' className='container'>
				<Navbar
					title='CV Analitcs'
					description='Por favor, preencha os dados abaixo para que possamos te conhecer melhor.'
				/>
				<main>
					<form onSubmit={EnviarFormulario}>
						<fieldset>
							<legend>Formulário Pré Teste</legend>
							<Input
								required
								name='anos'
								label='Quantos anos de experiência profissional você tem?'
								placeholder='Escolha um valor'
								value={anos}
								options={[
									{ value: 'Um ano' },
									{ value: 'Dois anos' },
									{ value: 'Três anos' },
									{ value: 'Quatro anos' },
									{ value: 'Cinco anos ou mais' },
								]}
								onChange={e => {
									setAnos(e.target.value);
								}}
							/>
						</fieldset>
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
}

export default PreQuestionairo;
