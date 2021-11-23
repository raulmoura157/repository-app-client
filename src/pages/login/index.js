import React, {useState} from 'react';
import {AlertCard} from '../../components';
import { useHistory } from 'react-router-dom';

import './styles.css';
import {api} from '../../api';

export default function Login(){
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [alertContext,setAlertContext] = useState({});
    const [show,setShow] = useState(false);

    var history = useHistory();

    async function handleLogin(){
        const data = {
            email,
            password
        }
        try{
            
        //Authenticate request
        const authenticate = await api.post('/client/login',data);

        //Setting JWT token into localStorage
        localStorage.setItem('token',authenticate.data.data);
        localStorage.setItem('user',JSON.stringify(authenticate.data.user));

        //Showing message alert
        setAlertContext({
            variant:"success",
            heading:"Voce está logado!",
            body:""
         });

         setShow(true);

        }
        catch(err){
            setAlertContext({
                variant:"danger",
                heading:"Ops, alguma coisa não deu certo!",
                body:"Sua senha ou seu e-mail está incorreto!"
                });
                setShow(true);
            console.log(err);
        }

         setTimeout(()=>{
            setShow(false);
            
            //Redirect to home page
            history.push('/me');

         },2000)
    }
    
    return(
        <div className="login">
            <div className="container">
                <div className="input-field">
                    <label>Email</label>
                    <input type="text" 
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder="Insira seu email..."
                    />
                </div>
                <div className="input-field">
                    <label>Senha</label>
                    <input type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                        placeholder="Insira sua senha..."
                    />
                </div>
                <button type='button' onClick={handleLogin}>Entrar</button>
            </div>
            <AlertCard
              variant={alertContext.variant}
              show={show}
              heading={alertContext.heading}
              body={alertContext.body}
            />
        </div>
    )
}