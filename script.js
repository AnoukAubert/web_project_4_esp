let editOpen = document.querySelector(".edit-profile__open");
let profileContainer = document.querySelector(".profile__container");
let profileEditButton = document.getElementsByClassName(".profile__edit_btn");

function editProfile() {
  document.querySelector(".edit-profile").classList.add("edit-profile__open");
}
function closeEdit() {
  document
    .querySelector(".edit-profile")
    .classList.remove("edit-profile__open");
}

let formElement = content.querySelector(".edit-profile__form");

function handleProfileFormSubmit() {
  
  let nameInput = document.querySelector(".edit-profile__text");
  let jobInput = document.querySelector(".edit-profile__about-me");

  profileName = document.querySelector(".profile__name");
  profileDescription = document.querySelector(".profile__desciption");
  
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeEdit()
}

function newPost() {
  document.querySelector(".new-post").classList.add("new-post__open");
}
function closePost() {
  document.querySelector(".new-post")
  .classList.remove("new-post__open");
}
