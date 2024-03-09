import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  enablePopup() {
    super.enablePopup();
    let yesButton = this._popup.querySelector(".popup__yes-btn");
    yesButton.addEventListener("click", () => {
      this._handleSubmit().then(() => {
        this.close();
      });
    });
  }

  open(handleConfirmClick) {
    super.open();
    this._handleSubmit = handleConfirmClick;
  }

  close() {
    super.close();
    const form = this._popup.querySelector(".popup__form");
    form.reset();
  }
}
