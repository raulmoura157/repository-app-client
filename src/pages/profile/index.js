import React,{useEffect,useState} from 'react';


import {Brush} from '@material-ui/icons';
import {AccountCircle} from '@material-ui/icons';


import './styles.css'

export default function Profile(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [CNPJ,setCNPJ] = useState('')

    const userPhrase  = localStorage.getItem('user');

    useEffect(()=>{

        const user = JSON.parse(userPhrase);

        setName(user.name)
        setEmail(user.email)
        setCNPJ(user.CNPJ)

    },[])
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
                    <p>{name}</p>
                    <button>
                        <Brush size={10}/>
                    </button>
                </div>
                <div className='input-field'>
                    <label>Email</label>
                    <p>{email}</p>
                    <button>
                        <Brush/>
                    </button>
                </div>
                <div className='input-field'>
                    <label>CNPJ</label>
                    <p>{CNPJ}</p>
                    <button>
                        <Brush size={14}/>
                    </button>
                </div>
            </div>
        </div>
    )
}