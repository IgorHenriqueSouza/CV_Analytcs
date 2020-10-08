import React, { useState } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader';


import Input from '../../components/Input';

import './styles.css';


function Login() {
	const [cpf, setCpf] = useState('');
	const [senha, setSenha] = useState('');

	const EnviarLogin = (e: React.FormEvent) => {
		e.preventDefault();
		const token = btoa(`${cpf}:${senha}`);

		axios
			.post('https://tcc-unip-api.herokuapp.com/login', null, {
				headers: {
					Authorization: `Basic ${token}`,
				},
			})
			.then(function (response) {
				localStorage.setItem('token', response.data.token);
                window.location.reload();
				//Redirect
			})
			.catch(function (error) {
				// handle error
				alert(error.response.data.message);
				
			});
	};
	
	return (
		<div id='page-teacher-form' className='container'>
			<PageHeader title='Cv Analitcs - Login' />

			<main>
				<form onSubmit={EnviarLogin}>
					<fieldset>
						<legend>Login na Aplicação</legend>
						<Input
							required
							name='cpf'
							label='CPF'
							value={cpf}
							placeholder='Digite seu cpf'
							minLength={14}
							mask={[
								/\d/,
								/\d/,
								/\d/,
								'.',
								/\d/,
								/\d/,
								/\d/,
								'.',
								/\d/,
								/\d/,
								/\d/,
								'-',
								/\d/,
								/\d/,
							]}
							guide={false}
							onChange={e => {
								setCpf(e.target.value);
							}}
						/>

						<Input
							name='senha'
							label='Senha'
							value={senha}
							placeholder='*****'
							type={'password'}
							onChange={e => {
								setSenha(e.target.value);
							}}
						/>
					</fieldset>

					<footer>
						<p></p>
						<button type='submit'>Entrar </button>
					</footer>
				</form>
			</main>
		</div>
	);
}

export default Login;
