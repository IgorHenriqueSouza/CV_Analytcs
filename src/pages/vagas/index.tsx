import React, { useEffect } from 'react';
import Movement from '../../components/movement';
import axios from 'axios';
import { Redirect, Link, Route } from 'react-router-dom';


import './styles.css';



function Vagas() {
    useEffect ( () => {
        var token = localStorage.getItem ('token');
        axios.get('https://tcc-unip-api.herokuapp.com/vagas?token=' + token)
        .then ((response) => {

        } )
        .catch ((error) => {
            
            alert(error.response.data.message);
            window.location.replace('/');
        })   
    });

    
    return (

        <div id="vagas" className="container">
             <Movement title="CV Analitcs" />
             
             <main>
                    <legend>Vagas Disponiveis</legend>

                    <div className="jobs">
                        <Link to="/login" className="vaga1">
                           
                        </Link>
                        <Link to="/login" className="vaga1">
                            
                        </Link>
                        <Link to="/login" className="vaga1">
                            
                        </Link>
                        <Link to="/login" className="vaga1">
                            
                        </Link>
                        <Link to="/login" className="vaga1">
                            
                        </Link>
                        <Link to="/login" className="vaga1">
                            
                        </Link>
                        
                    </div>

             </main>
        </div>
    )
}
export default Vagas;