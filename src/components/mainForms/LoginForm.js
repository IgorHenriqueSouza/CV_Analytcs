import React, { useContext, useEffect, useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';

import CandidatoState from '../../context/candidato/CandidatoState';
import RecrutadorState from '../../context/recrutador/RecrutadorState';
import ApplicationContext from '../../context/application/applicationContext';
import AlertContext from '../../context/alert/alertContext';

import Input from '../form/input';

const LoginForm = ({ match }) => {
	const appContext = useContext(ApplicationContext);
	const [form, setForm] = useState({});

	const handleInputChange = e => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		let previous = JSON.parse(JSON.stringify(form));
		previous[name] = value;

		setForm(previous);
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
			<form>
				<div class='row'>
					<div class='col-sm-12'>
						<Input
							name='CPF'
							label='CPF'
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
							id='password'
							placeholder='***'
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div class='row'>
					<div class='col'>
						<a href=''>Ainda não sou registrado</a>
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
