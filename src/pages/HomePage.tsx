import React from 'react';
import Header from '../components/Header';
import Service from '../service/Service';
import PriceList from '../components/PriceList';
const service = new Service();

const HomePage: React.FC = () => {
    const wine = service.wines;
    const prices = [{
        title: 'Vinho Tinto',
        items: [{
            name: 'tinto1',
            price: 33.33
        },
        {
            name: 'tinto2',
            price: 45.33
        },
        {
            name: 'tinto3',
            price: 23.33
        }]
    },
    {
        title: 'Vinho Branco',
        items: [{
            name: 'Branco1',
            price: 33.33
        },
        {
            name: 'Branco2',
            price: 45.33
        },
        {
            name: 'Branco3',
            price: 23.33
        }]
    }];

    return <>
        <Header menu={service.menu} logoImg={service.logoImg} />
        <main>
            <PriceList items={prices}/>
        </main>
    </>;
}

export default HomePage;