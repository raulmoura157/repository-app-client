import React from 'react';
import { useHistory } from 'react-router';

import {api} from '../../api';
import './styles.css'

export default function CreateProduct(){
    const history = useHistory();

    async function handleCreateProduct(){
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
        <div className="create-product">
            <div className="container">
                <div className="input-field">
                    <label>Nome</label>
                    <input type="text" 
                    value=''
                    onChange=''
                    placeholder="Insira o nome do produto..."
                    required
                    />
                </div>
                <div className="input-field">
                    <label>Descrição</label>
                    <input type="text" 
                    value=''
                    onChange=''
                    placeholder="Insira descrição do produto..."
                    required
                    />
                </div>
                <div className="input-field">
                    <label>Preço de Venda</label>
                    <input type="text" 
                    value=''
                    onChange=''
                    placeholder="Insira o preço unitário de venda..."
                    required
                    />
                </div>
                <div className="input-field">
                    <label>Quantidade</label>
                    <input type="text"
                    placeholder="Insira a quantidade de produto..."
                    required
                    />
                </div>
                <button type='button' onClick={handleCreateProduct}>Cadastrar</button>
            </div>
        </div>
    )
}

