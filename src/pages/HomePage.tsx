import React from 'react';
import Header from '../components/Header';
import Service from '../service/Service';
import WineCard from '../components/WineCard';
import WineCardCarousel from '../components/WineCardCarousel';

const service = new Service();

const HomePage: React.FC = () => {
    const content = "O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele. O vinho verdadeiramente santificado d'Ele.";
    const title="Vinho Santo Gole";

    return <>
        <Header menu={service.menu} logoImg={service.logoImg} />
        <main>
            <WineCardCarousel
                wineList={[{ content, title, imageSrc: service.logoImg, linkTo: ""  }]}  
            />
        </main>
    </>;
}

export default HomePage;