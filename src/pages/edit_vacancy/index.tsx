import React, { useState } from 'react';
import Movement from '../../components/movement';
import Input from '../../components/Input';
import './styles.css';

function Edit() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao ] = useState('');
    const [local, setLocal] = useState('');
    const [conhecimento, setConhecimento] = useState('');

    return (
        <div id="editar" className="container">
            <Movement title="CV Analitcs" />

            <main>
                <fieldset>
                    <legend>Editar Vaga</legend>
                    <Input
                        name="titulo"
                        label="titulo" 
                        value={titulo} 
                        onChange={(e) => { setTitulo(e.target.value) }}
                    />
                    <Input
                        name="Descricao"
                        label="Descrição" 
                        value={descricao} 
                        onChange={(e) => { setDescricao(e.target.value) }}
                    />
                    <Input
                        name="local"
                        label="Local" 
                        value={local} 
                        onChange={(e) => { setLocal(e.target.value) }}
                    />
                    <Input
                        name="conhecimento"
                        label="Conhecimento" 
                        value={conhecimento} 
                        onChange={(e) => { setConhecimento(e.target.value) }}
                    />
                </fieldset>

            </main>

        </div>

    )
}

export default Edit;