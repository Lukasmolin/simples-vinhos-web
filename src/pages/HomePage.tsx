import React from 'react';
import Header from '../components/Header';
import Service from '../service/Service';

export default class HomePage extends React.Component {

    private header: JSX.Element;

    constructor(header: Header, private service: Service) {
        super({});
        this.header = header.render();
        this.render = this.render.bind(this);
    }

    private generateRender() {
        const info = this.service.author;
        return (
            <div>
                {this.header}
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