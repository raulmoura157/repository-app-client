import React from 'react';
import {Navbar,Container} from 'react-bootstrap';

import './styles.css'

export default function Navegation(){
    return(
        <Navbar bg='variant' variant="none">
            <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <button type='submit'>Cadastrar-se</button>
            </Container>
      </Navbar>
    )
}