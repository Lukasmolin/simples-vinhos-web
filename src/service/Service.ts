import infoAuthor from '../config/InfoAuthor.json';
import infoWine from '../config/InfoWine.json';

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

export default class Service {

    public get wines() : Wine[] {
        return infoWine;
    }

    public get author() : Author {
        return infoAuthor;
    }

}