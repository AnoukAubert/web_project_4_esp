export default class Card {
  constructor(
    link,
    title,
    templateSelector,
    { handleCardClick, handleRemoveCardClick, handleAddLike, handleRemoveLike },
    cardData,
    user
  ) {
    this._link = link;
    this._title = title;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleRemoveCardClick = handleRemoveCardClick;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
    this._user = user;
    this._cardData = cardData;
  }

  _setEventListener() {
    const cardNode = this._element;
    cardNode.querySelector(".update__image").onclick = () => {
      this._handleCardClick(this._link, this._title);
    };
    let like = cardNode.querySelector(".update__like-btn");
    const counterNode = cardNode.querySelector(".update__counter");
    like.addEventListener("click", () => {
      if (this.hasOwnerLike()) {
        this._handleRemoveLike(this._cardData._id).then((card) => {
          this._cardData = card;
          like.classList.remove("update__liked_btn");
          counterNode.textContent = this._cardData.likes.length;
        });
      } else {
        this._handleAddLike(this._cardData._id).then((card) => {
          this._cardData = card;
          like.classList.add("update__liked_btn");
          counterNode.textContent = this._cardData.likes.length;
        });
      }
    });
    let deleteButton = cardNode.querySelector(".update__delete-btn");
    deleteButton.addEventListener("click", () => {
      this._handleRemoveCardClick(this._cardData._id, cardNode);
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

    let texto = cardNode.querySelector(".update__title");
    texto.textContent = this._title;

    let deleteButton = cardNode.querySelector(".update__delete-btn");
    let like = cardNode.querySelector(".update__like-btn");

    const counterNode = cardNode.querySelector(".update__counter");
    counterNode.textContent = this._cardData.likes.length;

    if (!this.isOwner()) {
      deleteButton.style.display = "none";
    }

    if (this.hasOwnerLike()) {
      like.classList.add("update__liked_btn");
    }

    return cardNode;
  }

  hasOwnerLike() {
    return this._cardData.likes.some((item) => item._id === this._user._id);
  }

  isOwner() {
    return this._user._id === this._cardData.owner._id;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();
    return this._element;
  }
}
