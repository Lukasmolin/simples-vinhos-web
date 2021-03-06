import React from 'react';
import Header from '../components/Header';
import PriceList, { PriceListSectionProps } from '../components/PriceList';
import Service, { Wine } from '../service/Service';
import ContactFooter from '../components/ContactFooter';
const service = new Service();

const convertWines = (wines: Wine[]): PriceListSectionProps[] => {
    const sections: string[] = [];
    wines.forEach(wine => {
        if(!sections.includes(wine.type)) {
            sections.push(wine.type);
        }
    });
    const listProps = sections.map(section => {
        const title = section;
        const items = wines
            .filter(wine => section === wine.type)
            .map(wine => {
                const { name, price } = wine;
                return { name, price };
            });
        return { title, items };
    });
    return listProps;
}

const PricesPage: React.FC = () => {
    const wineList = convertWines(service.wines);

    return <>
        <Header menu={service.menu} logoImg={service.logoImg} />
        <main>
            <div className="pageWrapper">
                <PriceList items={wineList} />
            </div>
        </main>
        <div className="pageFiller"></div>
        <footer>
            <ContactFooter 
                contacts={service.author.contacts}
            />
        </footer>
    </>;
}

export default PricesPage;