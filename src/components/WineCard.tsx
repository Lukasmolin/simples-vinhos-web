import React from 'react';
import './WineCard.css';

export interface WineCardProps {
    imageSrc: string
    title: string
    content: string
    price: number
}

const WineCard: React.FC<WineCardProps> = (props: WineCardProps) => {
    const textTitle = <div className="textTitle">
        <h1>{props.title}</h1>
    </div>;

    const textContent = <div className="textContent">
        {props.content}
    </div>;
    
    const footer = props.price <= 0 ? '' : <div className="textFooter">
        <span className="priceLabel">Preço:</span>
        <span className="priceValue">R$ {props.price}</span>
    </div>;

    return <div className="wineCard-comp" >
        <div className="imgHolder">
            <img 
                src={props.imageSrc}
                alt="Foto Vinho"
            >
            </img>
        </div>
        <div className="textInfo">
            <div className="innerTextContainer">
                { textTitle }
                { textContent }                
            </div>
            { footer }
        </div>
    </div>;
};

export default WineCard;