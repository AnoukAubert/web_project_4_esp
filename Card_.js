export default class Card {
  constructor(link, title, templateSelector) {
    this._link = link;
    this._title = title;
    this._templateSelector = templateSelector;
  }

  _setEventListener() {
    const cardNode = this._element;
    cardNode.querySelector(".update__image").onclick = () =>{
      let popZoom = document.querySelector(".zoom");
      popZoom.classList.add("zoom__open");
      let popImage = document.querySelector(".zoom__image");
      popImage.src = this._link;
      let popTitle = document.querySelector(".zoom__title");
      popTitle.textContent = this._title;
      popImage.alt = "fotografía de " + this._title;
    };
    let like = cardNode.querySelector(".update__like-btn");
    like.addEventListener("click", () => {
      if (
        cardNode
          .querySelector(".update__like-btn")
          .classList.contains("update__liked_btn")
      ) {
        cardNode
          .querySelector(".update__like-btn")
          .classList.remove("update__liked_btn");
      } else {
        cardNode
          .querySelector(".update__like-btn")
          .classList.add("update__liked_btn");
      }
    });
    let deleteButton = cardNode.querySelector(".update__delete-btn");
    deleteButton.addEventListener("click", () => {
      cardNode.remove();
    });
  }

  _getTemplate() {
    const cardNode = document
      .querySelector(".template-card")
      .content.querySelector(".update__card")
      .cloneNode(true);
    cardNode.querySelector(".update__image").src = this._link; //
    cardNode.querySelector(".update__image").alt =
      "fotografía de " + this._title;

    let texto = cardNode.querySelector('.update__title');
    texto.textContent = this._title;    

    return cardNode;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();
    return this._element;
  }
}
