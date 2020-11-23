import React, { useContext, useEffect, useState } from 'react';
import ApplicationContext from '../../context/application/applicationContext';
import RecrutadorContext from '../../context/recrutador/recrutadorContext';
import Input from '../form/Input.js';

const VagaForm = ({ readOnly }) => {
	const appContext = useContext(ApplicationContext);

	const recrutadorContext = useContext(RecrutadorContext);
	const { vaga, setVagaData, updateVaga } = recrutadorContext;

	const handleInputChange = e => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		let previous = JSON.parse(JSON.stringify(vaga));
		previous[name] = value;

		setVagaData(previous);
	};

	const submit = async e => {
		e.preventDefault();

		updateVaga();
	};

	useEffect(() => {}, []);

	if (vaga && vaga.id) {
		return (
			<div class='container main-container rounded shadow p-5'>
				<div class='row'>
					<div class='col'>
						<h1 class=''>Vaga</h1>

						<p class='lead'>Visualizar e/ou editar informações da vaga.</p>
					</div>
				</div>
				<div class='row'>
					<div class='col-offset-5'></div>
				</div>
				<form onSubmit={submit}>
					{Object.keys(vaga)
						.reverse()
						.map(x => {
							return x == 'id' ? null : (
								<div class='row'>
									<div class='col-sm-12'>
										<Input
											name={x}
											label={x.toUpperCase()}
											value={vaga[x]}
											disabled={readOnly}
											onChange={handleInputChange}
											required
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
					<h1 class=''>Vaga</h1>

					<p class='lead'>Visualizar e/ou editar informações da vaga.</p>
				</div>
			</div>
		);
};

export default VagaForm;
