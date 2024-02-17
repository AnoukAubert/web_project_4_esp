import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit){
        super(popupSelector);
        this._handleSubmit = handleSubmit;
    }

    _getInputValues(){
        const values = {};
        const inputValues = Array.from(this._popup.querySelectorAll('input'));
        inputValues.forEach(value => {
            values[value.name] = value.value;
        })
        return values;
    }

    _setEventListener(){
        super._setEventListener();
        const form = this._popup.querySelector('.popup__form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmit(this._getInputValues());
            this.close();
        });
    }

    close(){        
        super.close();
        const form = this._popup.querySelector('.popup__form');
        form.reset();
    }
}