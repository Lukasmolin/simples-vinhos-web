import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PricesPage from './pages/PricesPage';
import WinesPage from './pages/WinesPage';
import AboutUsPage from './pages/AboutUsPage';
import Service from './service/Service';
const rootUrl = new Service().rootUrl;

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path={rootUrl+"/home"} component={HomePage} exact/>
                <Route path={rootUrl+"/carta"} component={PricesPage} exact/>
                <Route path={rootUrl+"/vinhos"} component={WinesPage} exact/>
                <Route path={rootUrl+"/sobre"} component={AboutUsPage} exact/>
                <Route path="" component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}