import React from 'react';
import './WineCard.css';

export interface WineCardProps {
    imageSrc: string
    title: string
    content: string
    price: number
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
            <div className="innerTextContainer">
                <div className="textTitle">
                    <h1>{props.title}</h1>
                </div>
                <div className="textContent">
                    {props.content}
                </div>
            </div>
            <div className="textFooter">
                <span className="priceLabel">Preço:</span>
                <span className="priceValue">R$ {props.price}</span>
            </div>
        </div>
    </div>;
};

export default WineCard;