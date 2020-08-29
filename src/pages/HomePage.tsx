import React from 'react';
import Header from '../components/Header';
import Service from '../service/Service';
import WineCardCarousel from '../components/WineCardCarousel';
const service = new Service();

const retryNumber = (numbers: number[]) => {
    for (let i = 0; i < 10; i++) {
        const r = Math.round(Math.random() * 1000) % 4;
        if (!numbers.includes(r)) {
            numbers.push(r);
            return;
        }
    }
}

const HomePage: React.FC = () => {
    const rnd: number[] = [];
    for (let i = 0; i < 2; i++) {
        const r = Math.round(Math.random() * 1000) % service.wines.length;
        if (rnd.includes(r)) {
            retryNumber(rnd);
        } else {
            rnd.push(r);
        }
    }

    console.log(rnd);
    const wines = service.wines.filter((wine, index, wines) => {
        return Boolean(rnd.includes(index));
    });

    const wineList = wines.map(wine => {
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

export default HomePage;