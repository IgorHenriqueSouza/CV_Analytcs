import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*JS */
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';

/*Style */
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

/*Pages */
import NotFound from './components/Pages/NotFound';
import Landing from './components/Pages/Landing';
import Login from './components/Pages/Login';
import Cadastro from './components/Pages/Cadastro';
import Painel from './components/Pages/Painel';
import Vagas from './components/Pages/Vagas';
import Vaga from './components/Pages/Vaga';
import Perfil from './components/Pages/Perfil';
import PreQuestionario from './components/Pages/PreQuestionario';
/*Components */

import Alert from './components/layout/Alert';

/*States*/
import AlertState from './context/alert/AlertState';
import ApplicationState from './context/application/ApplicationState';
import RecrutadorState from './context/recrutador/RecrutadorState';
import CandidatoState from './context/candidato/CandidatoState';

const App = () => {
	return (
		<AlertState>
			<ApplicationState>
				<RecrutadorState>
					<CandidatoState>
						<Router>
							<div className='App'>
								<Alert />
								<Switch>
									<Route exact path='/' component={Landing} />
									<Route exact path='/login/:tipo' component={Login} />
									<Route exact path='/cadastro/:tipo' component={Cadastro} />
									<Route exact path='/painel' component={Painel} />
									<Route exact path='/vagas/:tipo' component={Vagas} />
									<Route exact path='/perfil/:cpf' component={Perfil} />
									<Route exact path='/vaga/:id/:edit' component={Vaga} />
									<Route
										exact
										path='/preQuestionario'
										component={PreQuestionario}
									/>

									<Route component={NotFound} />
								</Switch>
							</div>
						</Router>
					</CandidatoState>
				</RecrutadorState>
			</ApplicationState>
		</AlertState>
	);
};

export default App;
