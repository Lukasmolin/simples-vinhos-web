import React from 'react';
import './AboutCard.css';

export interface AboutCardProps {
    imageSrc: string;
    title: string;
    content: string;
}

const AboutCard: React.FC<AboutCardProps> = (props: AboutCardProps) => {
    return <div className="aboutCard-comp">
        <div className="aboutCardContainer">
            <div className="imageHolder">
                <img 
                    src={props.imageSrc}
                    alt="Foto Vinho"
                ></img>
            </div>
            <div className="textHolder">
                <h1>{ props.title }</h1>
                <p>{ props.content }</p>
            </div>
        </div>
    </div>;
}

export default AboutCard;