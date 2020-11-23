import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ApplicationContext from '../../context/application/applicationContext';
import Input from '../form/Input.js';

const PainelMenu = ({}) => {
	useEffect(() => {}, []);

	return (
		<div class='container main-container rounded shadow p-5'>
			<div class='row'>
				<div class='col'>
					<h1 class=''>Painel do Recrutador</h1>
					<p class='lead'>
						Aqui você pode acompanhar todas as provas, vagas em andamento e
						usuários
					</p>
				</div>
			</div>
			<div class='row'>
				<div class='col-sm-6 my-5 menu-col'>
					<Link to='/vagas/visualizar'>
						<div class='menu-item shadow-sm rounded px-5 absolute-center'>
							<h1 class='display4'>Resultados</h1>
						</div>
					</Link>
				</div>
				<div class='col-sm-6 my-5 menu-col'>
					<Link to='/vagas/editar'>
						<div class='menu-item shadow-sm rounded px-5 absolute-center'>
							<h1 class='display4'>Vagas</h1>
						</div>
					</Link>
				</div>
				<div class='col-sm-12 menu-col'>
					<Link to='/users'>
						<div class='menu-item-thin shadow-sm rounded px-5 absolute-center'>
							<h3 class=''>Usuários</h3>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PainelMenu;
