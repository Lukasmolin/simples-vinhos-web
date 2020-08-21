import React from 'react';
import './WineCard.css';

export interface WineCardProps {
    imageSrc: string
    title: string
    content: string
}

const WineCard: React.FC<WineCardProps> = (props: WineCardProps) => {   

    return <div className="wineCard-comp" >
        <div className="imgHolder">
            <img 
                src={props.imageSrc}
                alt="Foto Vinho"
            >
            </img>
        </div>
        <div className="textInfo">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    </div>;
};

export default WineCard;