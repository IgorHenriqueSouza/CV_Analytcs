import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/landing';
import TeacherList from './pages/login';
import TeacherForm from './pages/cadastro';
import Vagas from './pages/vagas'
import recruter_panel from './pages/recruter_panel';


function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={TeacherList} />
            <Route path="/cadastro" component={TeacherForm} />
            <Route path="/vagas" component={Vagas} />
            <Route path="/painel" component={recruter_panel} />
        </BrowserRouter>
    );
}

export default Routes;