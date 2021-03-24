import React, { useContext, useEffect, useState } from 'react';
import ApplicationContext from '../../context/application/applicationContext';
import RecrutadorContext from '../../context/recrutador/recrutadorContext';
import Input from '../form/Input.js';

const VagaForm = ({ readOnly, isNew }) => {
	const appContext = useContext(ApplicationContext);

	const recrutadorContext = useContext(RecrutadorContext);
	const {
		vaga,
		setVagaData,
		updateVaga,
		addSkill,
		removeSkill,
		// resetVaga,
	} = recrutadorContext;

	const handleInputChange = e => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		let previous = JSON.parse(JSON.stringify(vaga));
		previous[name] = value;

		setVagaData(previous);
	};

	const handleAdditionalInputChange = e => {
		// const target = e.target;
		// const value = target.type === 'checkbox' ? target.checked : target.value;
		// const name = target.name;
		// let previous = JSON.parse(JSON.stringify(vaga));
		// previous[name] = value;
		// setVagaData(previous);
	};

	const submit = async e => {
		e.preventDefault();

		updateVaga();
	};

	useEffect(() => {}, []);

	if ((vaga && vaga.id) || isNew) {
		return (
			<div class='container main-container rounded shadow p-5'>
				<div class='row'>
					<div class='col'>
						<h1 class=''>Vaga</h1>
						<p class='lead'>
							{!isNew
								? 'Visualizar e/ou editar informações da vaga.'
								: 'Adicionar nova vaga.'}
						</p>
					</div>
				</div>
				<div class='row'>
					<div class='col-offset-5'></div>
				</div>
				<form onSubmit={submit}>
					{Object.keys(vaga).map(x => {
						if (x == 'local')
							return (
								<div class='row'>
									<div class='col-sm-12'>
										<Input
											name={x}
											label={x.toUpperCase()}
											value={vaga[x]}
											onChange={handleInputChange}
											hideFirst={true}
											options={[
												{ id: 1, value: 'SP - São Paulo' },
												{ id: 2, value: 'RJ - Rio de Janeiro' },
												{ id: 3, value: 'BA - Salvador' },
											]}
											required
										/>
									</div>
								</div>
							);
						else
							return x == 'id' || x == 'parametros' ? null : (
								<div class='row'>
									<div class='col-sm-12'>
										<Input
											name={x}
											label={x.toUpperCase()}
											value={vaga[x]}
											onChange={handleInputChange}
											required
										/>
									</div>
								</div>
							);
					})}
					<br />
					<hr />
					{vaga.parametros &&
						vaga.parametros.map((x, i) => {
							return (
								<div class='row'>
									<div class='col-sm-6'>
										<Input
											name='skill'
											label={'Habilidade'}
											value={vaga.parametros[i].skill}
											onChange={handleAdditionalInputChange}
											hideFirst={false}
											options={[
												{ id: 1, value: 'Javascript' },
												{ id: 2, value: 'Python' },
												{ id: 3, value: 'Scrum' },
												{ id: 4, value: 'Soft Skills' },
												{ id: 5, value: 'Tempo de carreira' },
											]}
											required
										/>
									</div>
									<div class='col-sm-6'>
										<Input
											name='nivel'
											label={'Nível'}
											value={vaga.parametros[i].nivel}
											onChange={handleAdditionalInputChange}
											hideFirst={false}
											options={[
												{ id: 1, value: 'Baixo' },
												{ id: 2, value: 'Médio' },
												{ id: 3, value: 'Alto' },
											]}
											required
										/>
									</div>
								</div>
							);
						})}

					<div class='row'>
						{vaga.parametros && vaga.parametros.length > 1 && (
							<div class='col-sm-1 offset-md-10'>
								<span class='btn btn-danger btn-block' onClick={removeSkill}>
									-
								</span>
							</div>
						)}
						<div
							className={
								vaga.parametros && vaga.parametros.length > 1
									? 'col-sm-1'
									: 'col-sm-1 offset-md-11'
							}
						>
							{vaga.parametros && (
								<span class='btn btn-secondary btn-block' onClick={addSkill}>
									+
								</span>
							)}
						</div>
					</div>
					<br />

					{!readOnly || isNew ? (
						<div class='row'>
							<div class='col-sm-3 offset-md-9'>
								<button type='submit' class='btn btn-primary btn-block'>
									Enviar
								</button>
							</div>
						</div>
					) : null}
				</form>
			</div>
		);
	}
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
