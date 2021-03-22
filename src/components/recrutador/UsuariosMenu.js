import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RecrutadorContext from '../../context/recrutador/recrutadorContext.js';
import ApplicationContext from '../../context/application/applicationContext.js';
import Input from '../form/Input.js';

const UsuariosMenu = ({ results }) => {
	const recrutadorContext = useContext(RecrutadorContext);
	const {
		usuarios,
		fetchUsuarios,
		setUsuariosFilter,
		usuariosFilter,
		usuariosInit,
		resultsPerPage,
		setUsuariosPage,
	} = recrutadorContext;

	const handleChange = event => {
		setUsuariosFilter(event.target.value);
	};

	useEffect(e => {
		fetchUsuarios();
	}, []);

	return (
		<div class='container main-container rounded shadow p-5'>
			<div class='row'>
				<div class='col-sm-8'>
					<h1 class=''>Usuários</h1>
					<p class='lead'>
						Aqui você pode gerenciar os usuários disponíveis na aplicação.
					</p>
				</div>
				<div class='col-sm-4'>
					<Input
						name='filter'
						placeholder='Filtro...'
						value={usuariosFilter}
						onChange={handleChange}
					/>
				</div>
			</div>
			<table class='table table-hover'>
				<thead class='thead-dark'>
					<tr>
						<th scope='col'>CPF</th>
						<th scope='col'>Nome</th>
						<th scope='col'>Sobrenome</th>
						<th scope='col'>Email</th>
						<th scope='col'>Tipo</th>
						<th scope='col'>Status</th>
						<th scope='col'></th>
					</tr>
				</thead>
				<tbody>
					{usuarios.map(x => {
						let url = !results
							? '../resultado/' + x.id + ''
							: '../vaga/' + x.id + '/true';

						let text = !results ? 'Ver Resultado' : 'Editar';
						return (
							<tr>
								<th>{x.cpf}</th>
								<th>{x.nome}</th>
								<th>{x.sobrenome}</th>
								<th>{x.email}</th>
								<th>{x.tipo}</th>
								<th className={x.ativo ? 'color-green' : 'color-red'}>
									{x.ativo ? 'Ativo' : 'Inativo'}
								</th>

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
							Mostrando {usuarios.length} de {usuariosInit.length} resultados.
						</td>
					</tr>
				</tfoot>
			</table>

			<div class='d-flex justify-content-end'>
				{[...Array(Math.ceil(usuariosInit.length / resultsPerPage)).keys()].map(
					x => (
						<div
							class='btn btn-outline-secondary rounded mx-1 px-3'
							onClick={() => setUsuariosFilter(usuariosFilter, null, x + 1)}
						>
							{x + 1}
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default UsuariosMenu;
