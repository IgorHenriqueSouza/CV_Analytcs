import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*JS */
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';

/*Style */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

/*Pages */
import NotFound from './components/Pages/NotFound';
import Landing from './components/Pages/Landing';
import Login from './components/Pages/Login';

/*Components */

import Alert from './components/layout/Alert';

/*States*/
import AlertState from './context/alert/AlertState';
import ApplicationState from './context/application/ApplicationState';

const App = () => (
	<AlertState>
		<ApplicationState>
			<Router>
				<div className='App'>
					<Alert />
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route exact path='/login/:tipo' component={Login} />
						<Route exact path='/cadastro/:tipo' component={Login} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		</ApplicationState>
	</AlertState>
);

export default App;
