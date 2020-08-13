import infoHomePage from '../config/InfoHomePage.json';

export default class HomePageService {

    public get welcomeText(): string {
        return infoHomePage.welcomeText;
    }

}