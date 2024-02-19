export default class FormValidator {
  constructor(formElement, config) {
    this._formElement = formElement;
    this._config = config;
  }

  _showInputError = (formElement, inputElement, errorMessage) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._config.textSelector);
  };

  _hideInputError = (formElement, inputElement) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    formError.classList.remove(this._config.textSelector);
    formError.textContent = "";
  };

  _checkInputValidity = (formElement, inputNames) => {
    if (!inputNames?.validity.valid) {
      this._showInputError(
        formElement,
        inputNames,
        inputNames.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputNames);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputNames) => {
      return !inputNames.validity.valid;
    });
  };

  _toggleButtonState = (inputList, buttonEdit) => {
    if (this._hasInvalidInput(inputList)) {
      buttonEdit.classList.add(this._config.submitDisabledClass);
      buttonEdit.disabled = true;
    } else {
      buttonEdit.classList.remove(this._config.submitDisabledClass);
      buttonEdit.disabled = false;
    }
  };

  _setEventListeners = (inputs, button) => {
    const inputList = inputs;
    const buttonEdit = button;

    inputList.forEach((inputNames) => {
      inputNames.addEventListener("input", () => {
        this._checkInputValidity(this._formElement, inputNames);
        this._toggleButtonState(inputList, buttonEdit);
      });
      inputNames.addEventListener("keydown", () =>
        this._checkInputValidity(this._formElement, inputNames)
      );
    });
  };

  enableValidation = () => {
    const inputs = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    const button = this._formElement.querySelector(this._config.submitClass);
    console.log(this._config.submitClass, button, this._formElement);
    this._setEventListeners(inputs, button);
  };
}
