import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export interface HeaderProps {
    menu: {
       label: string
       to: string 
    }[]
    logoImg: string
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
                src={props.logoImg}
                alt="Simples Vinhos Logo">
            </img>
        </div>
        <div className="navWrapper">
            <nav>
                {menu}
            </nav>
        </div>

    </header>;
};

export default Header;