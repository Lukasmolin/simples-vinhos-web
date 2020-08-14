import React, { useEffect, useRef, useState } from 'react';
import './WineCard.css';

export interface WineCardProps {
    imageSrc: string
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
            <h1>Titulo</h1>
            <p>Lorem blabla lorem bla lorem blabla lorem bla bla lorem blabla lorem blabla lorem blabla lorem blabla lorem blabla lorem blabla lorem blabla lorem bla</p>
        </div>
    </div>;
};

export default WineCard;