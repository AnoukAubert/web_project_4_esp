export default class Section {
    constructor (items, renderer, cardSelector) {
        this._items = items;
        this._renderer = renderer; // esto se que no va acá
        this._cardsSection = document.querySelector(cardSelector);
    }

    cardsRender(){
        this._items.forEach((item) => {
            this.addItem(item, false);
        });
    }

    addItem(item, onStart = false){
        if(onStart){
            this._cardsSection.prepend(this._renderer(item));
        }else{
            this._cardsSection.append(this._renderer(item));
        }        
    }
}