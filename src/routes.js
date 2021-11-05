import React from 'react'
import {Switch, Route,BrowserRouter} from 'react-router-dom';
import { Home, Login } from './pages';


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

