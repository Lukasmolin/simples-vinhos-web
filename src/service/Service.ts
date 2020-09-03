import infoAuthor from '../config/InfoAuthor.json';
import infoWine from '../config/InfoWine.json';
import menuInfo from '../config/Menu.json';

export interface Wine {
    name: string
    type: string
    description: string
    imgUrl: string
    price: number
}

export interface ContactInfo {
    label: string;
    icon: string;
    linkTo: string;
}

export interface Author {
    name: string
    about: string
    imgUrl: string
    contacts: ContactInfo[];
}

export interface MenuItem {
    label: string
    to: string
}

export default class Service {

    public get rootUrl() : string {
        return menuInfo.rootUrl;
    }

    public get wines() : Wine[] {
        return infoWine.map(wine => { 
            return { ...wine, imgUrl: process.env.PUBLIC_URL+"/images/"+wine.imgUrl };
        });
    }

    public get author() : Author {
        const contactList = infoAuthor.contacts;
        const contacts = contactList.map(contact => {
            return {
                ...contact,
                icon: process.env.PUBLIC_URL+"/icons/"+contact.icon
            };
        });

        return { 
            ...infoAuthor,
            contacts,
            imgUrl: process.env.PUBLIC_URL+"/images/"+infoAuthor.imgUrl
        };
    }

    public get menu() : MenuItem[] {
        return menuInfo.items;
    }

    public get logoImg() : string {
        return process.env.PUBLIC_URL+"/images/SimplesLogo.png";
    }

    

}