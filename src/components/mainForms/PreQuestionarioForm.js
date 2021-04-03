import React, { useContext, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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

const useStyles = makeStyles(theme => ({
	root: {
		width: '80%',
		paddingLeft: '20%',
	},
	margin: {
		height: theme.spacing(3),
	},
}));

const marks = [
	{
		value: 0,
		label: 'Baixo',
	},
	{
		value: 50,
		label: 'Médio',
	},
	{
		value: 100,
		label: 'Alto',
	},
];

const PreQuestionarioForm = ({ type }) => {
	const classes = useStyles();
	const appContext = useContext(ApplicationContext);
	const {} = appContext;

	const candidatoContext = useContext(CandidatoContext);
	const {
		preQuestionario,
		preQuestionarioDone,
		setPreQuestionario,
		sendPreQuestionario,
	} = candidatoContext;

	const handleInputChange = (val, name) => {
		let mapping = {
			0: 'Básico',
			50: 'Intermediário',
			100: 'Avançado',
		};
		val = mapping[val];

		let previous = JSON.parse(JSON.stringify(preQuestionario));
		previous[name] = val;

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
						Olá candidato, informe os dados a seguir para dar continuidade ao
						processo.
					</p>
				</div>
			</div>
			<div class='row'>
				<div class='col-offset-5'></div>
			</div>
			{preQuestionarioDone === false ? (
				<form onSubmit={submit}>
					<div class='row'>
						<div class='col-sm-12'>
							{Object.keys(preQuestionario).map(x => {
								let aditional = {
									xp: {
										title: 'Anos de experiência no mercado de trabalho',
										marks: [
											{
												value: 0,
												label: '0-2',
											},
											{
												value: 50,
												label: '3-6',
											},
											{
												value: 100,
												label: '6+',
											},
										],
									},
									sql: { title: 'Nível de familiaridade com SQL.' },
									javascript: { title: 'Nível de familiaridade com JS.' },
									agile: { title: 'Nível de familiaridade com Agile.' },
									php: { title: 'Nível de familiaridade com PHP.' },
								};

								return (
									<div className={classes.root}>
										<Typography id='discrete-slider-custom' gutterBottom>
											{aditional[x].title}
										</Typography>
										<Slider
											id={x}
											defaultValue={0}
											aria-labelledby='discrete-slider-custom'
											step={50}
											valueLabelDisplay='off'
											marks={aditional[x].marks ?? marks}
											onChange={(e, val) => {
												handleInputChange(val, x);
											}}
										/>
										<br />
										<br />
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

export default PreQuestionarioForm;
