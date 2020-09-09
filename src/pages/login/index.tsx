import React, {useState} from 'react';

import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
 

import './styles.css';


function Login() {
    const [login, setLogin] = useState('');
    const [Senha, setSenha] = useState('');
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Cv Analitcs - Login" />
            
        <main>
            
            <Input 
                    name="logar" 
                    label="E-mail" 
                    value={login} 
                    onChange={(e) => { setLogin(e.target.value) }} 
                />

            <Input 
                    name="Senha" 
                    label="Senha"
                    value={Senha} 
                    onChange={(e) => { setSenha(e.target.value) }} 
                />
                
            
        </main>
        </div>
    )

    

}



export default Login;