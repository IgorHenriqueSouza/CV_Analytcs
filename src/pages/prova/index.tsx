import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import jwt from 'jwt-decode';
import Navbar from '../../components/Navbar';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';

function PainelCandidato() {
	let token = localStorage.getItem('token');
	let user = jwt(token);
	let provaFeita = true;

	if (user.type.includes('recrutador')) {
		alert('Acesso não autorizado!');
		return <div></div>;
	} else if (provaFeita) {
		return (
			<div id='painel-form' className='container'>
				<Navbar
					title='CV Analytics'
					description='Avaliação - 10 Minutos Restantes'
				/>
				<main>
					<legend></legend>
					<form>
						<fieldset>
							<legend>Avaliação</legend>
							<h6>
								<br></br>
								Nos exercícios a seguir, selecione a opção correta que preenche
								a lacuna da série:
								<br></br>
							</h6>
							<Input
								required
								name='anos'
								label='1. MCD, NEF, OGH,____, QKL.'
								placeholder='Escolha um valor'
								options={[
									{ value: '1', label: 'Um ano' },
									{ value: '2', label: 'Dois anos' },
									{ value: '3', label: 'Três anos' },
									{ value: '4', label: 'Quatro anos' },
									{ value: '5', label: 'Cinco anos ou mais' },
								]}
							/>
							<Input
								required
								name='anos'
								label='2. B5CD,_____, BCD7, B8CD, BC9D. (01)'
								placeholder='Escolha um valor'
								options={[]}
							/>
							<h6>
								<br></br>
								Nos próximos exercícios, selecione a opção que indica o próximo
								número da série:
								<br></br>
							</h6>
							<Input
								required
								name='anos'
								label='3. Considere a série de números: 51, 9, 51, 12, 51, 15, 51,… Qual é o próximo número?'
								placeholder='Escolha um valor'
								options={[]}
							/>
							<Input
								required
								name='anos'
								label='4. Considere a série de números: 23, 24, 27, 28, 31, 32,… Qual é o próximo número?'
								placeholder='Escolha um valor'
								options={[]}
							/>
							<Input
								required
								name='anos'
								label='change'
								placeholder='Escolha um valor'
								options={[]}
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
