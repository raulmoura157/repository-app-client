import React from 'react'
import {Switch, Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/home/home'
import Login from './pages/login/login';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path='/login' component={Login}/>
            </Switch>   
        </BrowserRouter>
    )
}

