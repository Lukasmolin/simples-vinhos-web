import React from 'react';
import Header from '../components/Header';
import Service from '../service/Service';
import AboutCard from '../components/AboutCard';
const service = new Service();
const author = service.author;

const AboutUsPage : React.FC = () => {   
    return <>
        <Header menu={service.menu} logoImg={service.logoImg} />
        <main>
            <AboutCard 
                title={author.name}
                imageSrc={author.imgUrl}
                content={author.about}
            />
        </main>
    </>;
}

export default AboutUsPage;