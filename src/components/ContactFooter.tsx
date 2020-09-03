import React from 'react';
import './ContactFooter.css';
import { ContactInfo } from '../service/Service';


export interface ContactFooterProps {
    contacts: ContactInfo[];
}

const ContactFooter: React.FC<ContactFooterProps> = (props: ContactFooterProps) => {
    console.log(props.contacts);
    const content = props.contacts.map(contactInfo => {
        return <div 
            className="contactImgContainer"
            key={contactInfo.label+contactInfo.icon}
            onClick={() => {
                window.open(contactInfo.linkTo);
            }}>
            <img                
                src={contactInfo.icon}
                alt={contactInfo.label}                
            ></img>
        </div>;
    });
    
    return <div className="contactFooter-comp">
        <div className="contactFooterContainer">
            { content }
        </div>
    </div>
}

export default ContactFooter;