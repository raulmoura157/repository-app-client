import React from 'react';

import './styles.css'
import HomeIcon from '@material-ui/icons/Home'
import AssignmentIcon from '@material-ui/icons/Assignment'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import AssessmentIcon from '@material-ui/icons/Assessment'

export default function AsideBar(){
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
           <a className='side-titles' href='/'>
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