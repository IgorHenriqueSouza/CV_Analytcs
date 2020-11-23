import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ApplicationContext from '../../context/application/applicationContext';
import Input from '../form/Input.js';

const LoginForm = ({ type }) => {
	const appContext = useContext(ApplicationContext);
	const { loginUser, setUserData, validateUserType } = appContext;

	const [form, setForm] = useState({});

	const urlPrefix = '../cadastro/';
	const [registerUrl] = useState(
		type === 'candidato' || type !== 'candidato'
			? urlPrefix + type
			: urlPrefix + 'candidato'
	);

	const handleInputChange = e => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		let previous = JSON.parse(JSON.stringify(form));
		previous[name] = value;

		setForm(previous);
	};

	const submit = async e => {
		e.preventDefault();

		loginUser(form);
	};

	useEffect(() => {}, []);

	return (
		<div class='container main-container rounded shadow p-5'>
			<div class='row'>
				<div class='col'>
					<h1 class=''>Login</h1>
					<p class='lead'>O primeiro passo é efetuar o login na aplicação</p>
				</div>
			</div>
			<div class='row'>
				<div class='col-offset-5'></div>
			</div>
			<form onSubmit={submit}>
				<div class='row'>
					<div class='col-sm-12'>
						<Input
							name='CPF'
							label='CPF'
							minLength='14'
							type='text'
							id='cpf'
							guide={false}
							mask={[
								/[0-9]/,
								/[0-9]/,
								/[0-9]/,
								'.',
								/[0-9]/,
								/[0-9]/,
								/[0-9]/,
								'.',
								/[0-9]/,
								/[0-9]/,
								/[0-9]/,
								'-',
								/[0-9]/,
								/[0-9]/,
							]}
							placeholder='xxx.xxx.xxx-xx'
							onChange={handleInputChange}
						/>
					</div>
					<div class='col-sm-12'>
						<Input
							name='password'
							label='Senha'
							type='password'
							minLength='8'
							id='password'
							placeholder='***'
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div class='row'>
					<div class='col'>
						<Link className='purple' to={registerUrl}>
							Ainda não sou registrado
						</Link>
					</div>
					<div class='col-sm-2 offset-md-10'>
						<button type='submit' class='btn btn-secondary btn-block'>
							Entrar
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
