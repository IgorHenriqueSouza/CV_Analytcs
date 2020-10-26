import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/landing';
import TeacherList from './pages/login';
import CadastroUser from './pages/cadastro';
import GerenciarVagas from './pages/gerenciar_vagas';
import GerenciarUsuarios from './pages/gerenciar_usuarios';
import PainelRecrutador from './pages/painel_recrutador';
import EditarVaga from './pages/editar_vaga';
import PreQuestionairo from './pages/pre_questionario';

function Routes() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Landing} />
			<Route path='/login' component={TeacherList} />
			<Route path='/cadastro/:tipo' component={CadastroUser} />
			<Route path='/preQuestionario' component={PreQuestionairo} />
			<Route path='/vagas' component={GerenciarVagas} />
			<Route path='/editarVaga/:id' component={EditarVaga} />
			<Route path='/painelRecrutador' component={PainelRecrutador} />
			<Route path='/painelCandidato' component={PainelRecrutador} />
			<Route path='/gerenciarUsuario' component={GerenciarUsuarios} />
		</BrowserRouter>
	);
}

export default Routes;
