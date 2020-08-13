import React from 'react';
import { Link } from 'react-router-dom';

export interface HeaderProps {
    menu: {
       label: string
       to: string 
    }[]
    logo: {
        img: string
    }
    text: {
        content: string
        font: {
            type: string
        }
    }
}

export const Header : React.FC<HeaderProps> = (props: HeaderProps) => {
    const menu = props.menu.map(val => {
        return <Link to={val.to}>{val.label}</Link>;
    });

    return (
        <header>
            <nav>
                {menu}
            </nav>
        </header>
    )
};

export default Header;