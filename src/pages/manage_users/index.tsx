import React from 'react';
import Movement from '../../components/movement';
import { Link } from 'react-router-dom';

import './styles.css'

function Manage_user(){
    return (
        <div id="manege-user" className="container">
            <Movement title="CV Analitcs" />

            <main>
                <legend>Gerenciar Usuários</legend>

                <div className="gerenciarVaga">
                    <Link to="/" className="user1">

                    </Link>


                </div>
            </main>


        </div>
    )
}

export default Manage_user;