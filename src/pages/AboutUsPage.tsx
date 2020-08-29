import React from 'react';
import Header from '../components/Header';
import WineCard from '../components/WineCard';
import Service from '../service/Service';
const service = new Service();
const author = service.author;

const AboutUsPage : React.FC = () => {   
    return <>
        <Header menu={service.menu} logoImg={service.logoImg} />
        <main>
            <WineCard 
                title={author.name}
                content={author.about}
                imageSrc={author.imgUrl}
                price={0}
            />
        </main>
    </>;
}

export default AboutUsPage;