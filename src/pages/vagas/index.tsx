import React from 'react';
import Movement from '../../components/movement';
import { Link } from 'react-router-dom';


import './styles.css';

function Vagas() {
    
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