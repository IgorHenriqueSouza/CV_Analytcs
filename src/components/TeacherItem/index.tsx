import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/50705825?s=460&u=d9ce65dd14900fc729af45965c8c4e0760af6af7&v=4" alt="Igor Henrique"/>
                        <div>
                            <strong>Igor Henrique</strong>
                            <span>Desenvolvimento web</span>

                        </div>
                    </header>
                    <p>
                        Apaixonado por FrontEnd.
                    </p>

                    <footer>
                        <p>
                            Preço/hora 
                            <strong>R$ 100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Entrar em contato"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;