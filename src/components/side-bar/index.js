import React from 'react';

import './styles.css'
import HomeIcon from '@mui/icons-material/Home'
import AssignmentIcon from '@mui/icons-material/Assignment'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import AssessmentIcon from '@mui/icons-material/Assessment'

export default function Side_Bar(props){
    return(
        <div className="side_bar_background">
           <a className='side-titles' href='/'>
              <HomeIcon/>
              <p>Home</p>
           </a>
           <a className='side-titles' href='/'>
               <AssignmentIcon/>
               <p>Produtos</p>
           </a>
           <a className='side-titles' href='/suppliers'>
               <AccountBoxIcon/>
               <p>Fornecedores</p>
           </a>
           <a className='side-titles' href='/'>
               <AssessmentIcon/>
               <p>Estoque</p>
           </a>
        </div>
    )
}