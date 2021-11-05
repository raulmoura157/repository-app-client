/*eslint-disable*/


import React,{useEffect,useState} from 'react';
import {Navbar,Container} from 'react-bootstrap';

import './styles.css'

import Logo from '../../images/Logo.png';

export default function Navegation(){

    const [location,setLocation] = useState('');

    useEffect(()=>{
        const getLocation  = window.location.pathname;
        
        setLocation(getLocation)

    })

    return(
        <Navbar bg='variant' variant="none">
            <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} alt='Best-Space'/>
                </Navbar.Brand>
                {location === "/"?
                <div className='buttons'>
                    <button type='submit' id="login">
                        <a href="/login" alt="">Login</a>
                    </button>
                    <p>|</p>
                    <button type='button'>Cadastrar-se</button>
                </div>
                :null}
            </Container>
      </Navbar>
    )
}