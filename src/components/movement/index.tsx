import React from 'react';

import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface movementProps{
    title:string;
    description?: string;
}
const Movement: React.FC<movementProps> = (props) => {
    return (
        <header className="movement">
            <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                </div>
             <div className="perfil">
                    <Link to="/">
                        Perfil
                    </Link>
                </div>
                <div className="sair">
                    <Link to="/">
                        Sair
                    </Link>

                </div>
        </header>
    );
}
export default Movement;