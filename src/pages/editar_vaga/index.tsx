import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import './styles.css';

function EditarVaga() {
	const [titulo, setTitulo] = useState('');
	const [descricao, setDescricao] = useState('');
	const [local, setLocal] = useState('');
	const [conhecimento, setConhecimento] = useState('');
	const [nível, setNivel] = useState('');

	return (
		<div id='editar' className='container'>
			<Navbar title='CV Analitcs' />

			<main>
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
			</main>
		</div>
	);
}

export default EditarVaga;
