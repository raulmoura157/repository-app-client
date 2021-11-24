import React from 'react'
import {Switch, Route,BrowserRouter} from 'react-router-dom';
import { Home, Login, SignUp, Profile, CreateProduct, Supplier } from './pages';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/me' component={Profile}/>
                <Route path='/product/new' component={CreateProduct}/>  
                <Route path='/supplier' component={Supplier}/>  
            </Switch>   
        </BrowserRouter>
    )
}

