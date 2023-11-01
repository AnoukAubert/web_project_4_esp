const formEditProfile = 'edit-profile';
const formNewPost = 'new-post';
const formNew = document.querySelector(".new-post__form");
const inputTitle = formNew.querySelector(".new-post__text");
const inputURL = formNew.querySelector(".new-post__url");
const buttonNew = document.querySelector(".new-post__create-btn");

const showInputError = (formElement, inputElement, errorMessage) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("input_type_error");
  formError.textContent = errorMessage;
  formError.classList.add("text_error-enabled");
};
const hideInputError = (formElement, inputElement) => {

  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("input_type_error");
  formError.classList.remove("text_error-enabled");
  formError.textContent = "";
};
const checkInputValidity = (formElement, inputNames) => {
  if (!inputNames?.validity.valid) {
        showInputError(formElement, inputNames, inputNames.validationMessage);
  } else {

    hideInputError(formElement, inputNames);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputNames) => {
    return !inputNames.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonEdit) => {
  if (hasInvalidInput(inputList)) {
    buttonEdit.classList.add("create-btn-disabled");
  } else {
    buttonEdit.classList.remove("create-btn-disabled");
  }
};

const setEventListeners = (inputs,button,nameForm) => {
  const inputList =inputs
  const buttonEdit = button
  const form= document.querySelector(`.${nameForm}`)
  inputList.forEach((inputNames) => {
    inputNames.addEventListener("input", function () {
      checkInputValidity(form, inputNames);
      toggleButtonState(inputList, buttonEdit);
    });
    inputNames.addEventListener("keydown", () => checkInputValidity(form, inputNames) );

  });
};
const enableValidation = (form) => {
  const nameForm=`${form}__form`	
    const fieldSetList = document.querySelector(`.${nameForm}`);

    const inputs = Array.from(fieldSetList.getElementsByTagName("input"))
    const button = fieldSetList.querySelector(`.${form}__create-btn`);
    setEventListeners(inputs,button,nameForm);
};

enableValidation(formEditProfile);
enableValidation(formNewPost);