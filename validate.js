const formEditProfile = 'edit-profile';
const formNewPost = 'new-post';
// const inputName = formEdit.querySelector(".edit-profile__text");
// const inputAbout = formEdit.querySelector(".edit-profile__about-me");
const formNew = document.querySelector(".new-post__form");
const inputTitle = formNew.querySelector(".new-post__text");
const inputURL = formNew.querySelector(".new-post__url");
// const buttonEdit = document.querySelector(".edit-profile__create-btn");
const buttonNew = document.querySelector(".new-post__create-btn");


const showInputError = (formElement, inputElement, errorMessage) => {
  console.log(formElement, inputElement,inputElement.id, errorMessage)
  const formError = formElement.querySelector(`.${inputElement.id}_error`);
  inputElement.classList.add("input_type_error");
  formError.textContent = errorMessage;
  formError.classList.add("text_error-enabled");
};
const hideInputError = (formElement, inputElement) => {
  console.log(formElement, inputElement,inputElement.id, )

  const formError = formElement.querySelector(`.${inputElement.id}_error`);
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
const setEventListeners = (formElement,nameForm) => {
  const inputList =[formElement[0],formElement[1]]
  const buttonEdit = formElement[2]
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
    const fieldsetList = Array.from(document.querySelector(`.${nameForm}`));
      setEventListeners(fieldsetList,nameForm);
};

enableValidation(formEditProfile);
enableValidation(formNewPost);