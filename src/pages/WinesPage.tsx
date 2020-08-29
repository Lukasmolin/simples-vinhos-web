import React from 'react';
import Header from '../components/Header';
import WineCardCarousel from '../components/WineCardCarousel';
import Service from '../service/Service';
const service = new Service();

const WinePage : React.FC = () => {
    const wineList = service.wines.map(wine => {
        return {
            imageSrc: wine.imgUrl,
            title: wine.name,
            content: wine.description,
            price: wine.price
        }
    });

    return <>
        <Header menu={service.menu} logoImg={service.logoImg} />
        <main>
            <WineCardCarousel wineList={wineList} />
        </main>
    </>;
}

export default WinePage;