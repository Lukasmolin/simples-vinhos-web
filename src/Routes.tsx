import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PricesPage from './pages/PricesPage';
import WinesPage from './pages/WinesPage';
import AboutUsPage from './pages/AboutUsPage';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={HomePage} exact/>
                <Route path="/carta" component={PricesPage} exact/>
                <Route path="/vinhos" component={WinesPage} exact/>
                <Route path="/sobre" component={AboutUsPage} exact/>
                <Route path="" component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}