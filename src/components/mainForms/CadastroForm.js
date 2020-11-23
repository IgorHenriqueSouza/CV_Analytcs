import React, { useContext, useEffect, useState } from 'react';

import Input from '../form/Input';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';

import ApplicationContext from '../../context/application/applicationContext';

const CadastroForm = ({ type }) => {
	const appContext = useContext(ApplicationContext);
	const {
		registerData,
		registerUser,
		setRegisterData,
		registerFinished,
		clearRegisterFinished,
	} = appContext;

	const urlPrefix = '../login/';
	const [loginUrl] = useState(
		type === 'candidato' || type !== 'candidato'
			? urlPrefix + type
			: urlPrefix + 'candidato'
	);

	const handleInputChange = e => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		let previous = JSON.parse(JSON.stringify(registerData));
		previous[name] = value;

		setRegisterData(previous, type);
	};

	const [redirect, setRedirect] = useState(false);

	const submit = async e => {
		e.preventDefault();

		registerUser();
	};

	useEffect(() => {
		if (registerFinished) {
			clearRegisterFinished();
			setRedirect(true);
		}
	});

	if (redirect) return <Redirect to='/' />;
	return (
		<div class='container main-container rounded shadow p-5'>
			<div class='row'>
				<div class='col'>
					<h1 class=''>Cadastro</h1>

					{type === 'candidato' ? (
						<p class='lead'>
							Olá candidato, preencha todos os dados para se registrar e dar
							continuidade ao processo.
						</p>
					) : (
						<p class='lead'>
							Olá recrutador, preencha todos os dados para se registrar e dar
							continuidade ao processo.
						</p>
					)}
				</div>
			</div>
			<div class='row'>
				<div class='col-offset-5'></div>
			</div>
			<form onSubmit={submit}>
				{Object.keys(registerData).map(x => {
					if (x == 'senha') {
						return (
							<div class='row'>
								<div class='col-sm-12'>
									<Input
										name={x}
										label={x.toUpperCase()}
										value={registerData[x]}
										onChange={handleInputChange}
										type='password'
										minLength='8'
										required
									/>
								</div>
							</div>
						);
					} else if (x == 'senhaConfirm') {
						return (
							<div class='row'>
								<div class='col-sm-12'>
									<Input
										name={x}
										label='CONFIRMAÇÃO DE SENHA'
										value={registerData[x]}
										onChange={handleInputChange}
										type='password'
										minLength='8'
										required
									/>
								</div>
							</div>
						);
					} else if (x == 'email') {
						return (
							<div class='row'>
								<div class='col-sm-12'>
									<Input
										name={x}
										label={x.toUpperCase()}
										value={registerData[x]}
										onChange={handleInputChange}
										type='email'
										minLength='8'
										required
									/>
								</div>
							</div>
						);
					}

					return x == 'id' || x == 'tipo' ? null : (
						<div class='row'>
							<div class='col-sm-12'>
								<Input
									name={x}
									label={x.toUpperCase()}
									value={registerData[x]}
									onChange={handleInputChange}
									required
								/>
							</div>
						</div>
					);
				})}
				<div class='row'>
					<div class='col'>
						<Link className='purple' to={loginUrl}>
							Ir para tela de login
						</Link>
					</div>
					<div class='col-sm-2 offset-md-10'>
						<button type='submit' class='btn btn-secondary btn-block'>
							Cadastrar
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CadastroForm;
