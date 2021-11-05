import React from 'react';

import './styles.css'
import facebook from '../../images/Facebook_icon.png'
import instagram from '../../images/Instagram_icon.png'

export default function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="column">
                    <span> Sobre</span>
                    <p>
                        Somos uma empresa focada no gerenciamento de estoque e ativos imobilizados,
                        com grande experiencia e relevancia no mercado de estruturação e manutenção de 
                        estoques
                    </p>
                </div>
                <div className="column">
                    <span> Institucional</span>
                    <p>CPNJ - 123.342.4342/0001</p>
                    <p>Sede - Av Faria Lima, 504, São Paulo/SP</p>
                    <p>Contato - atendimento@bestspace.com.br</p>
                </div>
                <div className="column">
                    <a href='www.facebook.com'>
                        <img src={facebook} alt='facebook icon'/>
                    </a>
                    <a href='instagram.com'>
                        <img src={instagram} alt='facebook icon'/>
                    </a>
                </div>
            </div>
            <hr />
            <div className="container-copyright">
                <p>© Copyright 2021 - Todos os direitos reservados</p>
            </div>
        </div>
    )
}