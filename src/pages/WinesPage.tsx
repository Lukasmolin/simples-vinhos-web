import React from 'react';
import Header from '../components/Header';
import WineCardCarousel from '../components/WineCardCarousel';
import Service from '../service/Service';
import ContactFooter from '../components/ContactFooter';
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

export default WinePage;