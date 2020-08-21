import React from 'react';
import WineCard from './WineCard';
import './WineCardCarousel.css';

export interface WineCardCarouselProps {
    wineList: {
        imageSrc: string;
        title: string;
        content: string;
        linkTo: string;
    }[];
}

const WineCardCarousel : React.FC<WineCardCarouselProps> = (props: WineCardCarouselProps) => {
    const { wineList } = props;
    
    return <div className="wineCardCarousel-comp">
        {
        wineList.map( wine => {
            return <div className="wineCardContainer">
                <WineCard
                    imageSrc={wine.imageSrc}
                    title={wine.title}
                    content={wine.content}
                />
            </div>;
        })
        }        
    </div>;
}

export default WineCardCarousel;