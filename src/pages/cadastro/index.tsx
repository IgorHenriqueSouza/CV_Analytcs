import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';


function TeacherForm() {
    const [name, setName] = useState('');
    const [sobrenome, setsobrenome] = useState('');
    const [email, setemail] = useState('');
    const [senha, setsenha] = useState('');
    const [idade, setidade] = useState('');
    const [cpf, setcpf] = useState('');
    const [contato, setcontato] = useState('');
    const [objetivos, setobjetivos] = useState('');
    const [estadocivil, setestadocivil] = useState('');
    const [tecnologia1, setTec1] = useState ('');
    const [tecnologia2, setTec2] = useState('');
    

   
 /*    function handleCreateClass(e: FormEvent) {
        e.preventDefault();
            post('classes',{
            name,
            sobrenome,
            cpf,
            idade,
            email,
            senha,
            contato,
            objetivos,
            cost: Number(cost),
            schedule: scheduleItems

        }).then(() => {
            alert('Cadastro realizado com sucesso!')
        }).catch(() => {
            alert('Erro no cadastro!!');
        })
        console.log(handleCreateClass);

    } */

    return (
        <div id="page-teacher-form" className="container">
        <PageHeader 
            title="O Primeiro passo é preencher todos os campos do cadastro."
            
        />
        <main>
            <fieldset>
                <legend>Dados pessoais</legend>

                <Input 
                    name="name" 
                    label="Nome" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} 
                />
                <Input 
                    name="sobrenome" 
                    label="Sobrenome" 
                    value={sobrenome} 
                    onChange={(e) => { setsobrenome(e.target.value) }} 
                />
                <Input 
                    name="cpf" 
                    label="CPF" 
                    value={cpf} 
                    onChange={(e) => { setcpf(e.target.value) }} 
                />
                <Input 
                    name="dt_nascimento" 
                    label="Data de Nascimento" 
                    value={idade} 
                    onChange={(e) => { setidade(e.target.value) }} 
                />
                <Input 
                    name="email" 
                    label="E-mail" 
                    value={email} 
                    onChange={(e) => { setemail(e.target.value) }} 
                />
                <Input 
                    name="senha" 
                    label="Senha" 
                    value={senha} 
                    onChange={(e) => { setsenha(e.target.value) }} 
                />
                <Input 
                    name="contato" 
                    label="Telefone" 
                    value={contato} 
                    onChange={(e) => { setcontato(e.target.value) }} 
                />
                <Textarea 
                    name="objetivos" 
                    label="objetivos profissionais" 
                    value={objetivos} 
                    onChange={(e) => { setobjetivos(e.target.value) }} 

                />              
                 <Select 
                    name="estadocivil" 
                    label="Estado Civil" 
                    value={estadocivil}
                    onChange={(e) => { setestadocivil(e.target.value)}}
                    options={[
                         { value: 'solteiro(a)', label: 'Solteiro' },
                         { value: 'casado (a)', label: 'Casado' },
                         { value: 'divorciado(a)', label: 'Divorciado' },
                         { value: 'viuvo(a)', label: 'viuvo(a)' },
                         
                    ]}
                />     
            </fieldset>

            <fieldset>

                <legend>Selecione suas principais técnologias</legend>
                <Select 
                    name="tecnologia1" 
                    label="1° técnologia" 
                    value={tecnologia1}
                    onChange={(e) => { setTec1(e.target.value)}}
                    options={[
                         { value: 'Javascript', label: 'Javascript' },
                         { value: 'php', label: 'PHP' },
                         { value: 'Python', label: 'Python' },
                         { value: 'Banco de dados', label: 'Banco de dados' },
                         { value: 'Scrum', label: 'Scrum' },
                         
                    ]}
                />
                <Select 
                    name="tecnologia2" 
                    label="2° técnologia" 
                    value={tecnologia2}
                    onChange={(e) => { setTec2(e.target.value)}}
                    options={[
                         { value: 'Javascript', label: 'Javascript' },
                         { value: 'php', label: 'PHP' },
                         { value: 'Python', label: 'Python' },
                         { value: 'Banco de dados', label: 'Banco de dados' },
                         { value: 'Scrum', label: 'Scrum' },
                         
                    ]}
                />

                                 
            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Importante! <br />
                    Preencha todos os dados
                </p>
                <button type="submit">
                    Salvar cadastro
                </button>
            </footer>
            
        </main>
    </div>
    )

}

export default TeacherForm;