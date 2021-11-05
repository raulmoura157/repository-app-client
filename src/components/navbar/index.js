/*eslint-disable*/


import React,{useEffect,useState} from 'react';
import {Navbar,Container} from 'react-bootstrap';

import './styles.css'

import Logo from '../../images/Logo.png';

export default function Navegation(){

    const [history,setHistory] = useState('');

    useEffect(()=>{
        const location  = window.location.pathname;
        
        setHistory(location)

        console.log(location)
    })

    return(
        <Navbar bg='variant' variant="none">
            <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} alt='Best-Space'/>
                </Navbar.Brand>
                {history === "/"?<button type='submit'>Cadastrar-se</button>:null}
            </Container>
      </Navbar>
    )
}