import React from 'react';
import Header, { HeaderProps } from '../components/Header';
import Service from '../service/Service';

const service = new Service();

const HomePage: React.FC = () => {
    return <>
        <Header menu={service.menu} logoImg={''} textContent={ 'Simples Vinhos' } />
        <main>
            {JSON.stringify(service.wines)}
        </main>
    </>;
}

export default HomePage;