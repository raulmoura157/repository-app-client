import React from 'react';


import {Brush} from '@material-ui/icons';
import {AccountCircle} from '@material-ui/icons';
import {api} from '../../api';


import './styles.css'

export default function Profile(){


    return(
        <div className="profile">
            <div className='aside-bar'>
            </div>
            <div className="profile-data">
                <h1>Perfil do Usuário</h1>
                <div className="Avatar">
                    <AccountCircle/>
                </div>
                <div className='input-field'>
                    <label>Nome</label>
                    <p>Joao Vitor Massuia Roberto</p>
                    <button>
                        <Brush size={10}/>
                    </button>
                </div>
                <div className='input-field'>
                    <label>Email</label>
                    <p>massuia1507@gmail.com</p>
                    <button>
                        <Brush/>
                    </button>
                </div>
                <div className='input-field'>
                    <label>CNPJ</label>
                    <p>129472637/0001</p>
                    <button>
                        <Brush size={14}/>
                    </button>
                </div>
            </div>
        </div>
    )
}