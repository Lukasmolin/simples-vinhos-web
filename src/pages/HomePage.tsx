import React from 'react';
import Header from '../components/Header';
import Service from '../service/Service';
import WineCardCarousel from '../components/WineCardCarousel';

const service = new Service();

const HomePage: React.FC = () => {
    const content = "O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele.O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele.O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele.O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele.";
    const title="Vinho Santo Gole";
    const wine = { content, title, imageSrc: service.logoImg, linkTo: "", price: 19.99  };

    return <>
        <Header menu={service.menu} logoImg={service.logoImg} />
        <main>
            <WineCardCarousel
                wineList={[ wine, wine, wine, wine, wine ]}
            />
        </main>
    </>;
}

export default HomePage;