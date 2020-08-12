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

export default class Header extends React.Component {

    private rendered: JSX.Element;

    constructor(props: HeaderProps) {
        super(props);
        this.render = this.render.bind(this);
        this.rendered = this.generateRendered(props);
    }

    private generateRendered(props: HeaderProps) {
        const menu = props.menu.map(val => {
            return <Link to={val.to}>{val.label}</Link>;
        });
        return (<header>
            <nav>
                {menu}
            </nav>
        </header>);
    }

    render() {
        return this.rendered;
    }

}