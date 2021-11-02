import React from 'react'
import {Switch, Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/home/home'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path='/login'/>
            </Switch>   
        </BrowserRouter>
    )
}

