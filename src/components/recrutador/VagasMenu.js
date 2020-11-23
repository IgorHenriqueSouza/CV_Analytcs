import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RecrutadorContext from '../../context/recrutador/recrutadorContext.js';
import ApplicationContext from '../../context/application/applicationContext.js';
import Input from '../form/Input.js';

const VagasMenu = ({}) => {
	const recrutadorContext = useContext(RecrutadorContext);
	const { vagas, fetchVagas } = recrutadorContext;

	const [data, setData] = useState([]);
	const [filter, setFilter] = useState('');

	const handleChange = event => {
		setFilter(event.target.value);
	};

	const applyFilter = () => {
		if (filter && filter.trim() !== '') {
			var res = vagas.filter(x => {
				let low = filter.toLowerCase();

				return (
					x.local.toLowerCase().includes(low) ||
					x.descricao.toLowerCase().includes(low) ||
					x.nome.toLowerCase().includes(low)
				);
			});

			return res;
		} else {
			return vagas;
		}
	};

	useEffect(() => {
		fetchVagas();
	}, []);

	return (
		<div class='container main-container rounded shadow p-5'>
			<div class='row'>
				<div class='col-sm-8'>
					<h1 class=''>Vagas</h1>
					<p class='lead'>
						Aqui você pode gerenciar as vagas disponíveis na aplicação.
					</p>
				</div>
				<div class='col-sm-4'>
					<Input
						name='filter'
						placeholder='Filtro...'
						value={filter}
						onChange={handleChange}
					/>
				</div>
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
					{applyFilter().map(x => {
						return (
							<tr>
								<th>{x.local}a</th>
								<th>{x.nome}</th>
								<th>{x.descricao}</th>
								<th>
									<Link to={'vaga/' + x.id}>Editar</Link>
								</th>
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					<tr>
						<td colspan='3' class='text-center'>
							{applyFilter().length} resultados.
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default VagasMenu;
