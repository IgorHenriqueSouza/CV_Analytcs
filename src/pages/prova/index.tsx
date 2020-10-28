import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import jwt from 'jwt-decode';
import Navbar from '../../components/Navbar';
import './styles.css';
import Input from '../../components/Input';

function PainelCandidato() {
	let token = localStorage.getItem('token');
	let user = jwt(token);
	let provaFeita = false;

	if (user.type.includes('recrutador')) {
		alert('Acesso não autorizado!');
		return (
			<div id='painel-form' className='container'>
				<Navbar title='CV Analytics' description='Painel do Candidato' />
				<main>
					<legend></legend>
					<form>
						<fieldset>
							<legend>Avaliação</legend>
							<Input
								required
								name='anos'
								label='Quantos anos de experiência profissional você tem?'
								placeholder='Escolha um valor'
								value={anos}
								options={[
									{ value: '1', label: 'Um ano' },
									{ value: '2', label: 'Dois anos' },
									{ value: '3', label: 'Três anos' },
									{ value: '4', label: 'Quatro anos' },
									{ value: '5', label: 'Cinco anos ou mais' },
								]}
								onChange={e => {
									setAnos(e.target.value);
								}}
							/>
							<Input
								required
								name='scrum'
								label='Qual sua familiaridade com o framework ágil scrum?'
								placeholder='Escolha um valor'
								value={scrum}
								options={niveis}
								onChange={e => {
									setScrum(e.target.value);
								}}
							/>
							<Input
								required
								name='bd'
								label='Qual sua familiaridade com banco de dados?'
								placeholder='Escolha um valor'
								value={bd}
								options={niveis}
								onChange={e => {
									setBd(e.target.value);
								}}
							/>
							<Input
								required
								name='js'
								label='Qual sua familiaridade com JavaScript?'
								placeholder='Escolha um valor'
								value={js}
								options={niveis}
								onChange={e => {
									setJs(e.target.value);
								}}
							/>
							<Input
								required
								name='php'
								label='Qual sua familiaridade com PHP?'
								placeholder='Escolha um valor'
								value={php}
								options={niveis}
								onChange={e => {
									setPhp(e.target.value);
								}}
							/>
						</fieldset>
						<footer>
							<p>
								<img src={warningIcon} alt='Aviso importante' />
								Importante! <br />
								Preencha todos os dados
							</p>
							<button type='submit'>Enviar Formulário</button>
						</footer>
					</form>
				</main>
			</div>
		);
	} else if (provaFeita) {
		return <div></div>;
	} else {
		return (
			<div id='painel-form' className='container'>
				<Navbar title='CV Analytics' description='Processo concluído!' />
				<main>
					<p>
						Obrigado pela sua participação, caso necessário, o setor de RH
						entrará em contato através do email cadastrado em breve!
					</p>
				</main>
			</div>
		);
	}
}

export default PainelCandidato;
