import React from 'react';
import {Navbar,Container} from 'react-bootstrap';

import './styles.css'

import Logo from '../../assets/Logo.png';

export default function Navegation(){
    return(
        <Navbar bg='variant' variant="none">
            <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} alt='Best-Space'/>
                </Navbar.Brand>
                <button type='submit'>Cadastrar-se</button>
            </Container>
      </Navbar>
    )
}