import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage}/>
                <Route path="" component={HomePage}/>
                <Route path="/home" component={HomePage}/>
            </Switch>
        </BrowserRouter>
    );
}