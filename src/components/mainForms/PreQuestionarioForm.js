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

const PreQuestionarioForm = ({ type }) => {
	const appContext = useContext(ApplicationContext);
	const {} = appContext;

	const candidatoContext = useContext(CandidatoContext);
	const {
		preQuestionario,
		setPreQuestionario,
		sendPreQuestionario,
	} = candidatoContext;

	const handleInputChange = e => {
		const target = e.target;

		// Id pq apenas selects
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		let previous = JSON.parse(JSON.stringify(preQuestionario));
		previous[name] = value;

		setPreQuestionario(previous, type);
	};

	const submit = async e => {
		e.preventDefault();

		sendPreQuestionario();
	};

	useEffect(() => {});

	return (
		<div class='container main-container rounded shadow p-5'>
			<div class='row'>
				<div class='col'>
					<h1 class=''>Pré Cadastro</h1>
					<p class='lead'>
						Olá candidato, preencha todos os dados a seguir para dar
						continuidade ao processo.
					</p>
				</div>
			</div>
			<div class='row'>
				<div class='col-offset-5'></div>
			</div>
			<form onSubmit={submit}>
				<div class='row'>
					<div class='col-sm-12'>
						{Object.keys(preQuestionario).map(x => {
							let parser = {
								anos:
									'Quantos anos de experiência você tem na sua área de atuação?',
								js:
									'Qual a sua familiaridade com a linguagem de programação JavaScript?',
								bd:
									'Qual seu nível de conhecimento em relação a banco de dados?',
								scrum:
									'Qual a sua familiaridade com o framework ágil denominado "Scrum"?',
								php:
									'Qual seu nível de conhecimento com a linguagem de programação PHP?',
							};

							let parserOptions =
								x == 'anos'
									? [
											{ id: 1, value: '1 ano' },
											{ id: 2, value: '2 anos' },
											{ id: 3, value: '3 anos' },
											{ id: 4, value: '4 anos ou mais' },
									  ]
									: [
											{ id: 'Básico', value: 'Básico' },
											{ id: 'Avançado', value: 'Avançado' },
											{ id: 'Intermediário', value: 'Intermediário' },
									  ];

							return x == 'id' ? null : (
								<div class='row'>
									<div class='col-sm-12'>
										<Input
											name={x}
											label={parser[x]}
											value={preQuestionario[x]}
											options={parserOptions}
											onChange={handleInputChange}
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
		</div>
	);
};

export default PreQuestionarioForm;
