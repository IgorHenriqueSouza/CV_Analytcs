import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RecrutadorContext from '../../context/recrutador/recrutadorContext.js';
import ApplicationContext from '../../context/application/applicationContext.js';
import Input from '../form/Input.js';

const VagasMenu = ({ isResults }) => {
	const recrutadorContext = useContext(RecrutadorContext);
	const {
		vagas,
		fetchVagas,
		setVagasFilter,
		vagasFilter,
		vagasInit,
		resultsPerPage,
		setVagasPage,
	} = recrutadorContext;

	console.log(isResults);

	const handleChange = event => {
		setVagasFilter(event.target.value);
	};

	useEffect(e => {
		fetchVagas();
	}, []);

	return (
		<div class='container main-container rounded shadow p-5'>
			<div class='row'>
				<div class='col-sm-8'>
					<h1 class=''>Vagas</h1>
					<p class='lead'>
						Aqui você pode visualizar as vagas disponíveis na aplicação.
					</p>
				</div>
				<div class='col-sm-3'>
					<Input
						name='filter'
						placeholder='Filtro...'
						value={vagasFilter}
						onChange={handleChange}
					/>
				</div>
				{!isResults && (
					<div class='col-sm-1'>
						<br />
						<Link to='/vaga/null/new' className='btn btn-primary btn-block'>
							+
						</Link>
					</div>
				)}
			</div>
			<table class='table table-hover'>
				<thead class='thead-dark'>
					<tr>
						<th scope='col'>Local</th>
						<th scope='col'>Nome</th>
						<th scope='col'>Descrição</th>
						<th scope='col'></th>
					</tr>
				</thead>
				<tbody>
					{vagas.map(x => {
						let url = isResults
							? '../resultado/' + x.id + ''
							: '../vaga/' + x.id + '/true';

						let text = isResults ? 'Ver Resultado' : 'Editar';
						return (
							<tr>
								<th>{x.local}</th>
								<th>{x.nome}</th>
								<th>{x.descricao}</th>

								<th>
									<Link to={url}>{text}</Link>
								</th>
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					<tr>
						<td colspan='3' class='text-center'>
							Mostrando {vagas.length} de {vagasInit.length} resultados.
						</td>
					</tr>
				</tfoot>
			</table>

			<div class='d-flex justify-content-end'>
				{[...Array(Math.ceil(vagasInit.length / resultsPerPage)).keys()].map(
					x => (
						<div
							class='btn btn-outline-secondary rounded mx-1 px-3'
							onClick={() => setVagasFilter(vagasFilter, null, x + 1)}
						>
							{x + 1}
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default VagasMenu;
