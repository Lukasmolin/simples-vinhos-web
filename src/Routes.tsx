import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Service from './service/Service';

const navHeader = new Header({
    menu: [
        { to: 'testeA', label: 'testeA' },
        { to: 'teste2', label: 'teste2' },
        { to: 'teste3', label: 'teste3' },
        { to: 'teste4', label: 'teste4' },
    ],
    logo: {
        img: ''
    },
    text: {
        content: '',
        font: {
            type: ''
        }
    }
});

export default function Routes(){   
    const homePage = new HomePage(navHeader, new Service());

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={homePage.render}/>
            </Switch>
        </BrowserRouter>
    );

}