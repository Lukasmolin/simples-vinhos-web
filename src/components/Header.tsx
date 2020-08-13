import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/imgs/SimplesLogo.png';
import './Header.css';

export interface HeaderProps {
    menu: {
       label: string
       to: string 
    }[]
    logoImg: string
    textContent: string
}

export const Header : React.FC <HeaderProps> = (props: HeaderProps) => {
    const menu = props.menu.map(val => {
        return <Link
            key={val.to+val.label}
            to={val.to}
            children={val.label}
        />;
    });

    return <header className="header-comp">
        <div className="logoWrapper">
            <img 
                className="logoImg"
                src={logo}
                alt="Simples Logo">
            </img>
        </div>
        <nav>
            {menu}
        </nav>
    </header>;
};

export default Header;