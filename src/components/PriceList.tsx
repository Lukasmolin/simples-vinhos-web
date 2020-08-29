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
            <span className="headerDivider" >
            </span>
            <span className="titleContainer">
                <h1>{props.title}</h1>
            </span>
        </div>
        <div className="priceListItemsContainer">
        {props.items.map(item => {
            return <div className="priceListItem" key={item.name+item.price}>
                <span className="itemName">{item.name}</span>
                <span className="itemPrice">R$ {item.price}</span>
            </div>;
        })}
        </div>
    </div>;
}

export interface PriceListProps {
    items: PriceListSectionProps[];
}

const PriceList: React.FC<PriceListProps> = (props: PriceListProps) => {
    return <div className="priceList-comp">
        <div className="priceListContainer">
            {props.items.map(section => {
                return <PriceListSection key={section.title} {...section} />
            })}
        </div>
    </div>;
};

export default PriceList;