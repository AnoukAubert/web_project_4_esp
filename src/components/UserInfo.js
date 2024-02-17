export default class UserInfo {
    constructor(){
        this._profileName = document.querySelector('.profile__name');
        this._profileDescription = document.querySelector('.profile__description');
    }

    setUserInfo(name, about){
        this._profileDescription.textContent = about;
        this._profileName.textContent = name;
    }

    getUserInfo(){
        return {
            name: this._profileName.textContent,
            about: this._profileDescription.textContent
        }
    }
}