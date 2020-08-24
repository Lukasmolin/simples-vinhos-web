import React from 'react';
import './PriceList.css';


export interface PriceListSectionProps {
    title: string;
    items: {
        name: string;
        price: number;
    }[];
}

export const PriceListSection: React.FC<PriceListSectionProps> = (props) => {
    return <div className="priceListSectionContainer">
        <div className="priceListSectionTitle">
            <h1>{props.title}</h1>
        </div>
        {props.items.map(item => {
            return <div className="priceListItem">
                <span>{item.name}</span>
                <span>R$ {item.price}</span>
            </div>;
        })}        
    </div>;
}

export interface PriceListProps {
    items: PriceListSectionProps[];
}

const PriceList: React.FC<PriceListProps> = (props) => {
    return <div className="priceList-comp">
        <div className="priceListContainer">
            {props.items.map(section => {
                return <PriceListSection {...section} />
            })}
        </div>
    </div>;
};

export default PriceList;