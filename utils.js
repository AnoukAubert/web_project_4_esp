import { handleProfileFormSubmit, addPost } from "./index.js";
const editProf = document.querySelector(".edit-profile");
const newPoste = document.querySelector(".new-post");
const zoom = document.querySelector(".zoom");
const profileAddButton = document.querySelector('.profile__edit-btn');
const profileCloseBUtton = document.querySelector('.edit-profile__close-btn');
const newCardCloseButton = document.querySelector('.new-post__close-btn');
const zoomCloseButton = document.querySelector('.zoom__close-btn');
export const container = document.querySelector(".update");
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];



export function closeZoom() {
  zoom.style.animation = "fadeout 0.5s ease";
  zoom.addEventListener("animationend", function onAnimationEnd() {
    zoom.style.animation = "";
    document.querySelector(".zoom").classList.toggle("zoom__open");
    zoom.removeEventListener("animationend", onAnimationEnd);
  });
  document.removeEventListener("keydown", () => add());
  document.removeEventListener("click", () => out());
}

function editProfile() {
  document.querySelector('.edit-profile').classList.toggle("edit-profile__open");
}

profileAddButton.addEventListener("click", editProfile);

export function closeEdit() {
  const  nameInput = document.querySelector('.edit-profile__text');
  const jobInput = document.querySelector('.edit-profile__about-me');
  nameInput.value = '';
  jobInput.value = '';
  let buttonEdit = document.querySelector(".edit-profile__create-btn");
  buttonEdit.classList.add("create-btn-disabled");

  editProf.style.animation = "fadeout 0.5s ease";
  editProf.addEventListener("animationend", function onAnimationEnd() {
    editProf.style.animation = "";
    document
      .querySelector(".edit-profile")
      .classList.remove("edit-profile__open");
    editProf.removeEventListener("animationend", onAnimationEnd);
  });

  document.removeEventListener("keydown", () => add());
  document.removeEventListener("click", () => out());
}
export function closePost() {
  let imageValue = document.querySelector(".new-post__url");
  let titleValue = document.querySelector(".new-post__text");
  imageValue.value = "";
  titleValue.value = "";
  let buttonNew = document.querySelector(".new-post__create-btn");
  buttonNew.classList.add("create-btn-disabled");

  newPoste.style.animation = "fadeout 0.5s ease";
  newPoste.addEventListener("animationend", function onAnimationEnd() {
    newPoste.style.animation = "";
    document.querySelector(".new-post").classList.remove("new-post__open");
    newPoste.removeEventListener("animationend", onAnimationEnd);
  });
  document.removeEventListener("keydown", () => add());
  document.removeEventListener("click", () => out());
}
export function add(evt) {
  if (
    evt.key === "Escape" &&
    editProf.classList.contains("edit-profile__open")
  ) {
    closeEdit();
  } else if (
    evt.key === "Escape" &&
    newPoste.classList.contains("new-post__open")
  ) {
    closePost();
  } else if (evt.key === "Escape" && zoom.classList.contains("zoom__open")) {
    closeZoom();
  }/* else if (
    evt.key === "Enter" &&
    editProf.classList.contains("edit-profile__open")
  ) {
    handleProfileFormSubmit();
  } else if (
    evt.key === "Enter" &&
    newPoste.classList.contains("new-post__open")
  ) {
    addPost();
  }*/
}

document.addEventListener("click", (e) => out(e));

export function out(evt) {
  if (
    evt.target.classList.contains("edit-profile__open") &&
    editProf.classList.contains("edit-profile__open")
  ) {
    closeEdit();
  } else if (
    evt.target.classList.contains("new-post__open") &&
    newPoste.classList.contains("new-post__open")
  ) {
    closePost();
  } else if (
    evt.target.classList.contains("zoom__open") &&
    zoom.classList.contains("zoom__open")
  ) {
    closeZoom();
  }
}

//editProf.addEventListener("submit", handleProfileFormSubmit);
//newPoste.addEventListener("submit", addPost);
profileCloseBUtton.addEventListener('click', closeEdit);
newCardCloseButton.addEventListener('click', closePost);
zoomCloseButton.addEventListener('click', closeZoom);
