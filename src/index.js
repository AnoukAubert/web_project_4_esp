import "./pages/index.css";
import {initialCards} from "./utils.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./components/PopupWithForms.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";
import Section from "./components/Section.js";

const cardsSection = new Section(
  initialCards,
  (item) => {
    const card = new Card(item.link, item.name, ".template-card", {
      handleCardClick: (link, title) => {
        imagePopup.open(link, title);
      },
    });
    return card.generateCard();
  },
  ".update"
);

const addButton = document.querySelector(".profile__add-btn");

const imagePopup = new PopupWithImage(".popup_zoom");

const userInfo = new UserInfo();

const profilePopup = new PopupWithForm(".popup_profile", (inputValues) => {
  userInfo.setUserInfo(inputValues.name, inputValues.about);
});

const addCardPopup = new PopupWithForm(".popup_new-post", (inputValues) => {
  cardsSection.addItem(
    {
      name: inputValues.title,
      link: inputValues.link,
    },
    true
  );
});

const formProfile = document.querySelector(".popup_profile");
const formAddCard = document.querySelector(".popup_new-post");

const editProfileButton = document.querySelector(".profile__edit-btn");
const addCardButton = document.querySelector(".profile__add-btn");

cardsSection.cardsRender();

const formValidatorProfile = new FormValidator(formProfile, {
  inputSelector: "input",
  submitClass: ".popup__create-btn",
  submitDisabledClass: "create-btn-disabled",
  textSelector: "text_error-enable",
  inputErrorClass: "popup__input_type_error",
});
formValidatorProfile.enableValidation();

const formValidatorPost = new FormValidator(formAddCard, {
  inputSelector: "input",
  submitClass: ".popup__create-btn",
  submitDisabledClass: "create-btn-disabled",
  textSelector: "text_error-enable",
  inputErrorClass: "popup__input_type_error",
});
formValidatorPost.enableValidation();

editProfileButton.addEventListener("click", function () {
  profilePopup.open();
});

addCardButton.addEventListener("click", function () {
  addCardPopup.open();
});

imagePopup.enablePopup();
profilePopup.enablePopup();
addCardPopup.enablePopup();
