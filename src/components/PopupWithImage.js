import  Popup  from "./Popup";

export default class PopupWithImage extends Popup{

    constructor(popupSelector){
        super(popupSelector);        
    }

    open(link, title){
        super.open();
        this._popup.querySelector('.popup__image').src = link;
        this._popup.querySelector('.popup__image-title').textContent = title;
    }

}