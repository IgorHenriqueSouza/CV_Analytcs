import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ApplicationContext from '../../context/application/applicationContext';
import Input from '../form/Input.js';

const ResultadoMenu = ({}) => {
	useEffect(() => {}, []);

	return (
		<div class='container main-container rounded shadow p-5'>
			<div class='row'>
				<div class='col'>
					<h1 class=''>Resultados da Vaga</h1>
					<p class='lead'>
						Aqui você pode visualizar a compatibilidade dos candidatos com essa
						vaga.
					</p>
				</div>
			</div>
			<div class='row'>
				<div class='col'>
					<table class='table table-hover'>
						<thead class='thead-dark'>
							<tr>
								<th scope='col'>Nome</th>
								<th scope='col'>SobreNome</th>
								<th scope='col'>Compatibilidade</th>
								<th scope='col'></th>
							</tr>
						</thead>
						<tbody>
							<td>João</td>
							<td>Marcelo</td>
							<td>87%</td>
							<td>
								<Link to='/perfil'>Ver Perfil</Link>
							</td>
						</tbody>
						<tbody>
							<td>Matheus</td>
							<td>Rodrigues</td>
							<td>60%</td>
							<td>
								<Link to='/perfil'>Ver Perfil</Link>
							</td>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ResultadoMenu;
