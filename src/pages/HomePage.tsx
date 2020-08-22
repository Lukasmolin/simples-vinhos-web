import React from 'react';
import Header from '../components/Header';
import Service from '../service/Service';
import WineCardCarousel from '../components/WineCardCarousel';

const service = new Service();

const HomePage: React.FC = () => {
    const content = "O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele.O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele.O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele.O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele.";
    const title="Vinho Santo Gole";
    const wine = service.wines;
    const wineList = wine.map(w => {
        return {
            content: w.description,
            title: w.name,
            price: w.price,
            imageSrc: w.imgUrl
        };
    });

    return <>
        <Header menu={service.menu} logoImg={service.logoImg} />
        <main>
            <WineCardCarousel
                wineList={wineList}
            />
        </main>
    </>;
}

export default HomePage;