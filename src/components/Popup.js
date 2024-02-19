export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._onAnimationEndBind = this.onAnimationEnd.bind(this);
  }

  open() {
    this._popup.classList.add("popup__open");
    document.addEventListener("keydown", this._keyPressEscapeHandler);
  }

  onAnimationEnd() {
    this._popup.style.animation = "";
    this._popup.classList.remove("popup__open");
    this._popup.removeEventListener("animationend", this._onAnimationEndBind);
  }

  close() {
    this._popup.style.animation = "fadeout 0.5s ease";
    this._popup.addEventListener("animationend", this._onAnimationEndBind);
    document.removeEventListener("keydown", this._keyPressEscapeHandler);
  }

  _keyPressEscapeHandler = (evt) => {
    if (evt.key == "Escape") {
      this.close();
    }
  };

  _setEventListener() {
    const closeButton = this._popup.querySelector(".popup__close-btn");
    closeButton.addEventListener("click", () => {
      this.close();
    });
    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__open")) {
        this.close();
      }
    });
  }

  enablePopup() {
    this._setEventListener();
  }
}
