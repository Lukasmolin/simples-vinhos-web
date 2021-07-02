import React from 'react';
import Header from '../components/Header';
import Service from '../service/Service';
import WineCardCarousel from '../components/WineCardCarousel';
import ContactFooter from '../components/ContactFooter';
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

const rnd: number[] = [];
for (let i = 0; i < 2; i++) {
    const r = Math.round(Math.random() * 1000) % service.wines.length;
    if (rnd.includes(r)) {
        retryNumber(rnd);
    } else {
        rnd.push(r);
    }
}
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

const HomePage: React.FC = () => {
    return <>
        <Header menu={service.menu} logoImg={service.logoImg} />
        <main>
            <div className="pageWrapper">
                <WineCardCarousel wineList={wineList} />
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

export default HomePage;