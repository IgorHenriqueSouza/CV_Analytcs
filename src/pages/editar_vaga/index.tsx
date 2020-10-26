import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';

function EditarVaga() {
	const [titulo, setTitulo] = useState('');
	const [descricao, setDescricao] = useState('');
	const [local, setLocal] = useState('');
	const [conhecimento, setConhecimento] = useState('');
	const [nível, setNivel] = useState('');

	return (
		<div id='painel-form' className='container'>
			<Navbar title='CV Analitcs' />

			<main>
				<form>
					<fieldset>
						<h2> Editar Vaga </h2>
						<Input
							name='nome'
							label='Nome'
							value={titulo}
							onChange={e => {
								setTitulo(e.target.value);
							}}
						/>
						<Input
							name='Descricao'
							label='Descrição'
							value={descricao}
							onChange={e => {
								setDescricao(e.target.value);
							}}
						/>
						<Input
							name='local'
							label='Local'
							value={local}
							onChange={e => {
								setLocal(e.target.value);
							}}
						/>

						<h2>Conhecimentos Necessários</h2>

						<Input
							name='conhecimento'
							label='Conhecimento'
							value={conhecimento}
							onChange={e => {
								setConhecimento(e.target.value);
							}}
						/>

						<Input
							name='nivel'
							label='Nível de conhecimento'
							value={nível}
							onChange={e => {
								setNivel(e.target.value);
							}}
						/>
					</fieldset>
					<footer>
						<p></p>
						<button type='submit'>Enviar</button>
					</footer>
				</form>
			</main>
		</div>
	);
}

export default EditarVaga;
