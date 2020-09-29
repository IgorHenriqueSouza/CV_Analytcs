import React, { useState } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';

import './styles.css';

function Login() {
	const [login, setLogin] = useState('');
	const [senha, setSenha] = useState('');

	const EnviarLogin = () => {
		//
		const token = btoa(`${login}:${senha}`);

		axios
			.post('https://tcc-unip-api.herokuapp.com/login', null, {
				headers: {
					Authorization: `Basic ${token}`,
				},
			})
			.then(function (response) {
				//Redirect

				console.log(response.data);
			})
			.catch(function (error) {
				// handle error
				alert(error.response.data);
			});
	};

	return (
		<div id='page-teacher-list' className='container'>
			<PageHeader title='Cv Analitcs - Login' />

			<main>
				<Input
					name='logar'
					label='CPF'
					value={login}
					type='number'
					onChange={e => {
						setLogin(e.target.value);
					}}
				/>

				<Input
					type='password'
					name='Senha'
					label='Senha'
					value={senha}
					onChange={e => {
						setSenha(e.target.value);
					}}
				/>

				<button type='submit' onClick={EnviarLogin}>
					Entrar
				</button>
			</main>
		</div>
	);
}

export default Login;
