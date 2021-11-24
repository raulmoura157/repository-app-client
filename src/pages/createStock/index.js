import React from 'react';
import { useHistory } from 'react-router';

import {api} from '../../api';
import './styles.css'

export default function CreateStock(){
    const history = useHistory();

    async function handleCreateStock(){
        //Clustering data in a object
        var data = {
             
        }

        //Calling API
        try{
            // const newProduct = await api.post('/products',data);
            
            // console.log(newClient);
            //Redirect to login page.
            history.push('/login');
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className="create-stock">
            <div className="container">
                <div className="input-field">
                    <label>Código do Produto</label>
                    <input type="text" 
                    value=''
                    onChange=''
                    placeholder="Insira o código do produto..."
                    required
                    />
                </div>
                <div className="input-field">
                    <label>Nome do Produto</label>
                    <input type="text" 
                    value=''
                    onChange=''
                    placeholder="Insira o nome do produto..."
                    required
                    />
                </div>
                <div className="input-field">
                    <label>Descrição do Produto</label>
                    <input type="text" 
                    value=''
                    onChange=''
                    placeholder="Insira a descrição do produto..."
                    required
                    />
                </div>
                <div className="input-field">
                    <label>Preço do Produto</label>
                    <input type="text"
                    placeholder="Insira o preço do produto..."
                    required
                    /> 
                </div>
                <div className="input-field">
                    <label>Quantidade do Produto</label>
                    <input type="text"
                    placeholder="Insira a quantidade de produto..."
                    required
                    /> 
                </div>
                <button className="registerButton" type='button' onClick={()=>0}>Cadastrar</button>
            </div>
        </div>
    )
}

