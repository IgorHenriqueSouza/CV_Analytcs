import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import Movement from '../../components/movement';
import './styles.css'

function recruter_panel() {
    return (
        <div id="panel" className="container"> 
            <Movement title="CV Analitcs" />
            <main>
            <legend>Painel do Recrutador</legend>
            <div className="painel">
                <Link to="/" className="modules">
                    <img src={backIcon} alt="IR"/>
                    Visualização dos Resultados
                </Link>

                <Link to="/" className="modules">
                    <img src={backIcon} alt="IR"/>
                    Usuários
                </Link>

                <Link to="/" className="modules">
                    <img src={backIcon} alt="IR"/>
                    GErenciar Vagas
                </Link>

                <Link to="/" className="modules">
                    <img src={backIcon} alt="IR"/>
                    Gerenciar Provas
                </Link>

            </div>
            </main>

        </div>
    )
}

export default recruter_panel;