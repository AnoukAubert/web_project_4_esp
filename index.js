import {closePost, closeEdit, initialCards, container} from './utils.js';
import Card from './card.js';
import FormValidator from './FormValidator.js';

const addButton = document.querySelector('.profile__add-btn');
const formProfile = document.querySelector('.edit-profile__form');
const formAddCard = document.querySelector('.new-post__form');

const nameCardInput = document.querySelector('.new-post__text');
const linkCardInput = document.querySelector('.new-post__url');



export function handleProfileFormSubmit(event) {
  event.preventDefault();
  const  nameInput = document.querySelector('.edit-profile__text');
  const jobInput = document.querySelector('.edit-profile__about-me');

  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  
  closeEdit();
}


function newPost() {
  document.querySelector('.new-post').classList.toggle('new-post__open');
}

export function addPost(event) {
  event.preventDefault();
  const cardCopy = new Card ( 
    linkCardInput.value, 
    nameCardInput.value, 
    '.template-card'
  )
  container.prepend(cardCopy.generateCard());
  closePost();
}

addButton.addEventListener('click', newPost);
formProfile.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', addPost);

initialCards.forEach(item => {
  const card = new Card(item.link, item.name, '.template-card');
  container.appendChild(card.generateCard());
})

const formValidatorProfile = new FormValidator(formProfile, {
  inputSelector : 'input', 
  submitClass: '.edit-profile__create-btn', 
  submitDisabledClass: 'create-btn-disabled', 
  textSelector: 'text_error-enable', 
  inputErrorClass: 'edit-profile__input_type_error'
});
formValidatorProfile.enableValidation();

const formValidatorPost = new FormValidator(formAddCard, {
  inputSelector : 'input', 
  submitClass: '.new-post__create-btn', 
  submitDisabledClass: 'create-btn-disabled', 
  textSelector: 'text_error-enable', 
  inputErrorClass: 'new-post__input_type_error'
});
formValidatorPost.enableValidation();