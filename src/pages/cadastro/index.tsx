import React, { useState } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
	const [nome, setNome] = useState('');
	const [sobrenome, setSobrenome] = useState('');
	const [cpf, setCpf] = useState('');
	const [mail, setMail] = useState('');
	const [senha, setSenha] = useState('');
	const [senhaConfirm, setSenhaConfirm] = useState('');

	const EnviarCadastro = () => {
		let cad = {
			nome: nome,
			sobrenome: sobrenome,
			cpf: cpf,
			senha: senha,
			senhaConfirm: senhaConfirm,
		};

		axios
			.post('https://tcc-unip-api.herokuapp.com/cadastro', cad)
			.then(function (response) {
				//Redirect painel do recrutador
				console.log(response.data);
			})
			.catch(function (error) {
				// handle error
				alert(error.response.data.message);
			});
	};

	return (
		<div id='page-teacher-form' className='container'>
			<PageHeader title='O Primeiro passo é preencher todos os campos do cadastro.' />
			<main>
				<fieldset>
					<legend>Criação de Usuário</legend>
					<Input
						name='cpf'
						label='CPF'
						value={cpf}
						onChange={e => {
							setCpf(e.target.value);
						}}
					/>
					<Input
						name='name'
						label='Nome'
						value={nome}
						onChange={e => {
							setNome(e.target.value);
						}}
					/>
					<Input
						name='sobrenome'
						label='Sobrenome'
						value={sobrenome}
						onChange={e => {
							setSobrenome(e.target.value);
						}}
					/>

					<Input
						name='email'
						label='E-mail'
						value={mail}
						onChange={e => {
							setMail(e.target.value);
						}}
					/>
					<Input
						name='senha'
						label='Senha'
						value={senha}
						onChange={e => {
							setSenha(e.target.value);
						}}
					/>
					<Input
						name='senha2'
						label='Confirmação de Senha'
						value={senhaConfirm}
						onChange={e => {
							setSenhaConfirm(e.target.value);
						}}
					/>
				</fieldset>

				<footer>
					<p>
						<img src={warningIcon} alt='Aviso importante' />
						Importante! <br />
						Preencha todos os dados
					</p>
					<button type='submit' onClick={EnviarCadastro}>
						Enviar Cadastro
					</button>
				</footer>
			</main>
		</div>
	);
}

export default TeacherForm;
