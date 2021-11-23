import React,{useState} from 'react';
import { useHistory } from 'react-router';

import {api} from '../../api';
import './styles.css'

export default function SignUp(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [CNPJ,setCNPJ] = useState('');
    const [password,setPassword] = useState('');

    const history = useHistory();

    async function handleSignUp(){
        //Clustering data in a object
        var data = {
            name,
            email,
            password,
            CNPJ
        }

        //Calling API
        try{
            const newClient = await api.post('/client',data);
            
            console.log(newClient);
            //Redirect to login page.
            history.push('/login');
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className="signUp">
            <div className="container">
                <div className="input-field">
                    <label>Nome</label>
                    <input type="text" 
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    placeholder="Insira seu nome..."
                    required
                    />
                </div>
                <div className="input-field">
                    <label>Email</label>
                    <input type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                        placeholder="Insira seu email..."
                    required
                    />
                </div>
                <div className="input-field">
                    <label>CNPJ/CPF</label>
                    <input type="text"
                    value={CNPJ}
                    onChange={e => setCNPJ(e.target.value)}
                        placeholder="Insira seu CNPJ..."
                    required
                    />
                </div>
                <div className="input-field">
                    <label>Senha</label>
                    <input type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                        placeholder="Insira sua senha..."
                    required
                    />
                </div>
                <button type='button' onClick={handleSignUp}>Cadastrar</button>
            </div>
        </div>
    )
}

