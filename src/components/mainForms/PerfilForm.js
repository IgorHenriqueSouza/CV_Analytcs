import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ApplicationContext from '../../context/application/applicationContext';
import Input from '../form/Input.js';

const PerfilForm = readOnly => {
	const appContext = useContext(ApplicationContext);
	const { userProfile, user } = appContext;

	const [form, setForm] = useState({});

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
	};

	useEffect(() => {}, []);

	if (userProfile && userProfile.cpf) {
		return (
			<div class='container main-container rounded shadow p-5'>
				<div class='row'>
					{user && user.user && user.user == userProfile.cpf ? (
						<div class='col'>
							<h1 class=''>{userProfile.nome + ' ' + userProfile.sobrenome}</h1>

							<p class='lead'>Meu Perfil</p>
						</div>
					) : (
						<div class='col'>
							<h1 class=''>
								Perfil: {userProfile.nome + ' ' + userProfile.sobrenome}
							</h1>

							<p class='lead'>Visualizar e/ou editar informações de usuário.</p>
						</div>
					)}
				</div>
				<div class='row'>
					<div class='col-offset-5'></div>
				</div>
				<form onSubmit={submit}>
					{Object.keys(userProfile).map(x => {
						return x == 'id' ? null : (
							<div class='row'>
								<div class='col-sm-12'>
									<Input
										name={x}
										label={x.toUpperCase()}
										value={userProfile[x]}
										disabled={readOnly}
									/>
								</div>
							</div>
						);
					})}
					{!readOnly ? (
						<div class='row'>
							<div class='col-sm-2 offset-md-10'>
								<button type='submit' class='btn btn-secondary btn-block'>
									Entrar
								</button>
							</div>
						</div>
					) : null}
				</form>
			</div>
		);
	} else
		return (
			<div class='container main-container rounded shadow p-5'>
				<div class='col'>
					<h1 class=''>Perfil</h1>

					<p class='lead'>Visualizar e/ou editar informações de usuário.</p>
				</div>
			</div>
		);
};

export default PerfilForm;
