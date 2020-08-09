import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Routes(){

    function comp() {
        return <p>Teste</p>
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={comp}/>
            </Switch>
        </BrowserRouter>
    );

}