import React from 'react'
import {Switch, Route,BrowserRouter} from 'react-router-dom';
import { Home, Login, SignUp, Profile } from './pages';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/profile' component={Profile}/>
            </Switch>   
        </BrowserRouter>
    )
}

