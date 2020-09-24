import React, {useState} from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
 

import './styles.css';

function EnviarLogin(e: { preventDefault: () => void; }){
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    }
    
    axios.post('https://tcc-unip-api.herokuapp.com/login', null, {
        headers: headers
        })
        .then((response) => {
            alert (response);
        })
        .catch((error) => {

        })
} 
    

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

                <button type="submit" onClick= {EnviarLogin}>
                    Entrar
                </button>
                
            
        </main>
        </div>
    )

    

}



export default Login;