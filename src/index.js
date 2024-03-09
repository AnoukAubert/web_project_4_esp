import "./pages/index.css";
import { handleAddLike, handleRemoveCardClick, handleRemoveLike,confirmPopup } from "./utils.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForms.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";
import Section from "./components/Section.js";
import { api } from "./components/Api.js";

let cardsSection = null;
let currentUser = null;

api.getUserInfo().then(user => {
  currentUser = user;
  userInfo.setUserInfo(user.name, user.about, user.avatar);
  return renderCards();
});


function renderCards() {
  return api.getCards().then(cards => {
    cardsSection = new Section(
      cards,
      (item) => {
        const card = new Card(item.link, item.name, ".template-card", {
          handleCardClick: (link, title) => {
            imagePopup.open(link, title);
          },
          handleRemoveLike,
          handleRemoveCardClick,
          handleAddLike                
        },item, currentUser);        
        return card.generateCard();
      },
      ".update"
    );
    cardsSection.cardsRender();
  });
}




const addButton = document.querySelector(".profile__add-btn");

const imagePopup = new PopupWithImage(".popup_zoom");

const userInfo = new UserInfo();

const profilePopup = new PopupWithForm(".popup_profile", (inputValues) => {
  return api.updateUser(inputValues.name, inputValues.about).then(() => {
    userInfo.setUserInfo(inputValues.name, inputValues.about);
  });
  
});

const addCardPopup = new PopupWithForm(".popup_new-post", (inputValues) => {
  return api.insertCard(inputValues.link,inputValues.title).then(card => {
    cardsSection.addItem(
      card,
      true
    );
  })
});

const formProfile = document.querySelector(".popup_profile");
const formAddCard = document.querySelector(".popup_new-post");
const formAvatar = document.querySelector(".popup_pic");
const editPicPopup = new PopupWithForm(".popup_pic", (inputValues) => {
  return api.updateAvatar(inputValues.pic).then((user) => {
    userInfo.setAvatar(user.avatar);
  })
});

const editProfileButton = document.querySelector(".profile__edit-btn");
const addCardButton = document.querySelector(".profile__add-btn");
const editPicButton = document.querySelector(".profile__image-btn");




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

const formValidatorAvatar = new FormValidator(formAvatar, {
  inputSelector: "input",
  submitClass: ".popup__create-btn",
  submitDisabledClass: "create-btn-disabled",
  textSelector: "text_error-enable",
  inputErrorClass: "popup__input_type_error",
});
formValidatorAvatar.enableValidation();

editProfileButton.addEventListener("click", function () {
  profilePopup.open();
});

addCardButton.addEventListener("click", function () {
  addCardPopup.open();
});

editPicButton.addEventListener("click", function () {
  editPicPopup.open();
});

imagePopup.enablePopup();
profilePopup.enablePopup();
addCardPopup.enablePopup();
editPicPopup.enablePopup();
confirmPopup.enablePopup();
