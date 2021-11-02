import React from 'react';

import './styles.css';

export default function Login(){
    return(
        <div className="login">
            <div className="container">
                <div className="input-field">
                    <label>Email</label>
                    <input type="text" 
                        placeholder="Insira seu email..."
                    />
                </div>
                <div className="input-field">
                    <label>Senha</label>
                    <input type="password" 
                        placeholder="Insira sua senha..."
                    />
                </div>
                <button>Entrar</button>
            </div>
        </div>
    )
}