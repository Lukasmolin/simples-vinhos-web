import React from 'react';
import Header from '../components/Header';
import Service from '../service/Service';
import AboutCard from '../components/AboutCard';
import ContactFooter from '../components/ContactFooter';
const service = new Service();
const author = service.author;

const AboutUsPage : React.FC = () => {   
    return <>
        <Header menu={service.menu} logoImg={service.logoImg} />
        <main>
            <div className="pageWrapper">
                <AboutCard 
                    title={author.name}
                    imageSrc={author.imgUrl}
                    content={author.about}
                />
            </div>
        </main>
        <footer>
            <ContactFooter 
                contacts={service.author.contacts}
            />
        </footer>      
    </>;
}

export default AboutUsPage;