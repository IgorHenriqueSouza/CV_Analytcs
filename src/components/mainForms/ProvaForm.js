import React, { useContext, useEffect, useState } from 'react';

import Input from '../form/Input';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';

import CandidatoContext from '../../context/candidato/candidatoContext';
import ApplicationContext from '../../context/application/applicationContext';

const ProvaForm = ({ type }) => {
	const appContext = useContext(ApplicationContext);
	const {} = appContext;

	const candidatoContext = useContext(CandidatoContext);
	const { prova, provaDone, setProva, sendProva } = candidatoContext;

	const handleInputChange = e => {
		const target = e.target;

		// Id pq apenas selects
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		let previous = JSON.parse(JSON.stringify(prova));
		previous[name] = value;

		setProva(previous, type);
	};

	const submit = async e => {
		e.preventDefault();

		sendProva();
	};

	useEffect(() => {});

	return (
		<div class='container main-container rounded shadow p-5'>
			<div class='row'>
				<div class='col'>
					<h1 class=''>Prova</h1>
					<p class='lead'>
						Olá candidato, conclua o teste a seguir para concluir o preocesso!.
					</p>
				</div>
			</div>
			<div class='row'>
				<div class='col-offset-5'></div>
			</div>
			{provaDone === false ? (
				<form onSubmit={submit}>
					<div class='row'>
						<div class='col-sm-12'>
							{Object.keys(prova).map(x => {
								let parser = {
									id1: '1. MCD, NEF, OGH,____, QKL.',
									id2: '2. B5CD,_____, BCD7, B8CD, BC9D.',
									id3:
										'Considere a série de números: 51, 9, 51, 12, 51, 15, 51,… Qual é o próximo número? ',
									id4:
										'4. Considere a série de números: 23, 24, 27, 28, 31, 32,… Qual é o próximo número?',
									id5:
										'5. Todas as árvores do parque são floridas. Algumas árvores do parque são ipês amarelos. Todos os ipês amarelos são árvores floridas. Se as duas primeiras sentenças são verdadeiras, a terceira é:',
									id6: '6. Pelo que o Scrum Master é responsável? ',
									id7:
										'7. Uma das razões por que se mede a velocidade do Time de Desenvolvimento nos Sprints é...',
									id8:
										'8. A estrutura básica de uma expressão SQL consiste em três cláusulas. Assinale-as: ',
									id9:
										'9. Sobre o modelo de entidade-relacionamento, assinale a alternativa correta: ',
									id10:
										'10. O React é uma biblioteca JavaScript de código aberto e, atualmente, é uma das ferramentas mais populares entre os desenvolvedores web. São características do React ser uma biblioteca',
								};

								let parserOptions = {
									id1: [
										{ id: '1', value: 'CMN' },
										{ id: '1', value: 'UJI' },
										{ id: '1', value: 'PIJ' },
										{ id: '1', value: 'IJT' },
									],
									id2: [
										{ id: '1', value: 'B2C2D' },
										{ id: '1', value: 'BC6D' },
										{ id: '1', value: 'B2C3D' },
										{ id: '1', value: 'BCD1' },
									],
									id3: [
										{ id: '1', value: '14' },
										{ id: '1', value: '18' },
										{ id: '1', value: '21' },
										{ id: '1', value: '24' },
									],
									id4: [
										{ id: '1', value: 'a' },
										{ id: '1', value: 'b' },
										{ id: '1', value: 'c' },
										{ id: '1', value: 'd' },
									],
									id5: [
										{ id: '1', value: 'a' },
										{ id: '1', value: 'b' },
										{ id: '1', value: 'c' },
										{ id: '1', value: 'd' },
									],
									id6: [
										{ id: '1', value: 'a' },
										{ id: '1', value: 'b' },
										{ id: '1', value: 'c' },
										{ id: '1', value: 'd' },
									],
									id7: [
										{ id: '1', value: 'a' },
										{ id: '1', value: 'b' },
										{ id: '1', value: 'c' },
										{ id: '1', value: 'd' },
									],
									id8: [
										{ id: '1', value: 'a' },
										{ id: '1', value: 'b' },
										{ id: '1', value: 'c' },
										{ id: '1', value: 'd' },
									],
									id9: [
										{ id: '1', value: 'a' },
										{ id: '1', value: 'b' },
										{ id: '1', value: 'c' },
										{ id: '1', value: 'd' },
									],
									id10: [
										{
											id: '1',
											value:
												'declarativa, que não gerencia seu próprio virtual DOM e não permite a criação de aplicativos móveis.',
										},
										{
											id: '1',
											value:
												'imperativa, que não gerencia seu próprio virtual DOM e não dá suporte a componentes reutilizáveis',
										},
										{ id: '1', value: 'c' },
										{ id: '1', value: 'd' },
									],
								};

								return x == 'id' ? null : (
									<div class='row'>
										<div class='col-sm-12'>
											<Input
												name={x}
												label={parser[x]}
												value={prova[x]}
												options={parserOptions[x]}
												onChange={handleInputChange}
												required
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div class='row'>
						<div class='col-sm-2 offset-md-10'>
							<button type='submit' class='btn btn-secondary btn-block'>
								Cadastrar
							</button>
						</div>
					</div>
				</form>
			) : null}
		</div>
	);
};

export default ProvaForm;
