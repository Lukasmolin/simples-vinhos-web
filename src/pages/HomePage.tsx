import React from 'react';
import Header from '../components/Header';
import Service from '../service/Service';
import HomePageService from '../service/HomePageService';
import WineCard from '../components/WineCard';

const service = new Service();
const homePageService = new HomePageService();

const HomePage: React.FC = () => {
    return <>
        <Header menu={service.menu} logoImg={service.logoImg} />
        <main>
            <WineCard 
                imageSrc={service.logoImg}
                title="Vinho Santo Gole"
                content="O vinho verdadeiramente santificado d'Ele"    
            />
        </main>
    </>;
}

export default HomePage;