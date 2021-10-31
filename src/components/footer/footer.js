import React from 'react';

import './styles.css'
export default function Footer(){
    return(
        <div className="wrapper">
            <div className="container">
                <div className="column">
                    <span> Texto Alternativo</span>
                    <p>Conteudo...</p>
                </div>
                <div className="column">
                    <span> Texto Alternativo</span>
                    <p>Conteudo...</p>
                </div>
                <div className="column">
                    <span> Texto Alternativo</span>
                    <p>Conteudo...</p>
                </div>
            </div>
            <hr />
            <div className="container-copyright">
                <p>© Copyright 2021 - Todos os direitos reservados</p>
            </div>
        </div>
    )
}