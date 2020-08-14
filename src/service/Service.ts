import infoAuthor from '../config/InfoAuthor.json';
import infoWine from '../config/InfoWine.json';
import menuInfo from '../config/Menu.json';
import logo from '../resources/imgs/SimplesLogo.png';

export interface Wine {
    name: string
    type: string
    description: string
    imgUrl: string
    price: number
}

export interface Author {
    name: string
    about: string
    imgUrl: string
    contact: {
        whatsapp: string
        instagram?: string
        facebook?: string
    }
}

export interface MenuItem {
    label: string
    to: string
}

export default class Service {

    public get wines() : Wine[] {
        return infoWine;
    }

    public get author() : Author {
        return infoAuthor;
    }

    public get menu() : MenuItem[] {
        return menuInfo.items;
    }

    public get logoImg() : string {
        return logo;
    }

}