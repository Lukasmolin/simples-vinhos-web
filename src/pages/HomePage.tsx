import React from 'react';
import Header from '../components/Header';
import Service from '../service/Service';
import HomePageService from '../service/HomePageService';

const service = new Service();
const homePageService = new HomePageService();

const HomePage: React.FC = () => {
    return <>
        <Header menu={service.menu} logoImg={service.logoImg} />
        <main>
            {homePageService.welcomeText}
        </main>
    </>;
}

export default HomePage;