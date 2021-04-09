import React, { useContext, useEffect, useState } from 'react';

import Input from '../form/Input';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';

import CandidatoContext from '../../context/candidato/candidatoContext';
import ApplicationContext from '../../context/application/applicationContext';

const ProvaForm = ({ type }) => {
	const appContext = useContext(ApplicationContext);
	const {} = appContext;

	const candidatoContext = useContext(CandidatoContext);
	const {
		prova,
		provaDone,
		setProva,
		sendProva,
		setProvaData,
	} = candidatoContext;

	const handleInputChange = e => {
		const target = e.target;

		// Id pq apenas selects
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		let previous = JSON.parse(JSON.stringify(prova));
		previous[name] = value;

		setProva(previous, type);
	};

	const submit = async e => {
		e.preventDefault();

		sendProva();
	};

	useEffect(() => {
		if (!prova) setProvaData();
	}, [prova]);

	if (!prova) return null;

	return (
		<div class='container main-container rounded shadow p-5'>
			<div class='row'>
				<div class='col'>
					<h1 class=''>Prova</h1>
					<p class='lead'>
						Olá candidato, conclua o teste a seguir para concluir o preocesso!.
					</p>
				</div>
			</div>
			<div class='row'>
				<div class='col-offset-5'></div>
			</div>
			{provaDone === false ? (
				<form onSubmit={submit}>
					<div class='row'>
						<div class='col-sm-12'>
							{prova.map(x => {
								return (
									<div class='row'>
										<div class='col-sm-12'>
											<Input
												name={x.id}
												label={x.nome}
												value={''}
												options={[]}
												// onChange={handleInputChange}
												required
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div class='row'>
						<div class='col-sm-2 offset-md-10'>
							<button type='submit' class='btn btn-secondary btn-block'>
								Cadastrar
							</button>
						</div>
					</div>
				</form>
			) : null}
		</div>
	);
};

export default ProvaForm;
