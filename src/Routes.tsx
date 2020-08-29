import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PricesPages from './pages/PricesPage';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={HomePage} exact/>
                <Route path="/carta" component={PricesPages} exact/>
                <Route path="" component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}