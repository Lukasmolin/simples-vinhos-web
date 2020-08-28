import React from 'react';
import Header from '../components/Header';
import PriceList, { PriceListSectionProps } from '../components/PriceList';
import Service, { Wine } from '../service/Service';
const service = new Service();

const convertWines = (wines: Wine[]): PriceListSectionProps[] => {
    
    
    return [];
}

const PricesPage: React.FC = () => {
    return <>
        <Header menu={service.menu} logoImg={service.logoImg} />
        <main>
            test
        </main>
    </>;
}

export default PricesPage;