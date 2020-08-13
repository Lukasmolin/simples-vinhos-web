import React from 'react';
import Header, { HeaderProps } from '../components/Header';
import Service from '../service/Service';

export default class HomePage extends React.Component {

    constructor(private header: HeaderProps, private service: Service) {
        super({});
        this.render = this.render.bind(this);
    }

    private generateRender() {
        const info = this.service.author;
        return (
            <div>
                {Header(this.header)}
                <main>
                    {JSON.stringify(info)}
                </main>
            </div>
        )
    }

    public render() {
        return this.generateRender();
    }





}