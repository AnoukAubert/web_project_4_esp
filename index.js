const editOpen = document.querySelector(".edit-profile__open");
let profileContainer = document.querySelector(".profile__container");
let profileEditButton = document.querySelector(".profile__edit-btn");
const container = document.querySelector(".update");
const cardElement = document.querySelector(".card");
const updateCard = document.querySelector(".update__card");
const editProf = document.querySelector(".edit-profile");
const newPoste = document.querySelector(".new-post");
const zoom = document.querySelector(".zoom");
const initialCards = [
  {
    id: 0,
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    id: 1,
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    id: 2,
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    id: 3,
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    id: 4,
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    id: 5,
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function closeZoom() {
  document.querySelector(".zoom").classList.remove("zoom__open");
  document.querySelector(".zoom").classList.add("zoom-disabled");
  document.removeEventListener("keydown", () => add());
  document.removeEventListener("click", () => out());
}

initialCards.forEach((cardElement, index) => {
  if (index === 0) {
    let imagen = updateCard.querySelector(".update__image");
    imagen.src = cardElement.link;
    imagen.alt = "fotografía de " + cardElement.name;
    imagen.onclick = function zoomPic() {
      let popZoom = document.querySelector(".zoom");
      popZoom.classList.remove("zoom-disabled");
      popZoom.classList.add("zoom__open");
      let popImage = document.querySelector(".zoom__image");
      popImage.src = cardElement.link;
      let popTitle = document.querySelector(".zoom__title");
      popTitle.textContent = cardElement.name;
    };
    let texto = updateCard.querySelector(".update__title");
    texto.textContent = cardElement.name;

    let like = updateCard.querySelector(".update__like-btn");

    like.addEventListener("click", function () {
      if (
        updateCard
          .querySelector(".update__like-btn")
          .classList.contains("update__liked_btn")
      ) {
        updateCard
          .querySelector(".update__like-btn")
          .classList.remove("update__liked_btn");
      } else {
        updateCard
          .querySelector(".update__like-btn")
          .classList.add("update__liked_btn");
      }
    });

    let deleteButton = updateCard.querySelector(".update__delete-btn");
    deleteButton.addEventListener("click", function () {
      const deletePicture = updateCard;
      deletePicture.remove();
      initialCards.forEach((cardElement) => {
        if (cardElement.id === index) {
          initialCards.splice(cardElement.id.length, 1);
        }
      });
    });
  } else {
    const cardCopy = updateCard.cloneNode(true);
    cardCopy.id = index;
    let imagen = cardCopy.querySelector(".update__image");
    imagen.src = cardElement.link;
    imagen.alt = "fotografía de " + cardElement.name;
    imagen.onclick = function zoomPic() {
      let popZoom = document.querySelector(".zoom");
      popZoom.classList.remove("zoom-disabled");
      popZoom.classList.add("zoom__open");
      let popImage = document.querySelector(".zoom__image");
      popImage.src = cardElement.link;
      let popTitle = document.querySelector(".zoom__title");
      popTitle.textContent = cardElement.name;
    };
    let texto = cardCopy.querySelector(".update__title");
    texto.textContent = cardElement.name;

    let like = cardCopy.querySelector(".update__like-btn");

    like.addEventListener("click", function () {
      if (
        cardCopy
          .querySelector(".update__like-btn")
          .classList.contains("update__liked_btn")
      ) {
        cardCopy
          .querySelector(".update__like-btn")
          .classList.remove("update__liked_btn");
      } else {
        cardCopy
          .querySelector(".update__like-btn")
          .classList.add("update__liked_btn");
      }
    });
    let deleteButton = cardCopy.querySelector(".update__delete-btn");
    deleteButton.addEventListener("click", function () {
      const deletePicture = cardCopy;
      deletePicture.remove();
      initialCards.forEach((cardElement) => {
        if (cardElement.id == index) {
          initialCards.splice(cardElement.id.length, 1);
        }
      });
    });

    container.append(cardCopy);
  }
});
function editProfile() {
  document.querySelector(".edit-profile").classList.add("edit-profile__efect");
  document.querySelector(".edit-profile").classList.add("edit-profile__open");
}
function closeEdit() {
  let nameInput = document.querySelector(".edit-profile__text");
  let jobInput = document.querySelector(".edit-profile__about-me");
  nameInput.value = "";
  jobInput.value= "";
  document.querySelector(".edit-profile").classList.remove("edit-profile__open");
  document.removeEventListener("keydown", () => add());
  document.removeEventListener("click", () => out());
}

function handleProfileFormSubmit() {
  let nameInput = document.querySelector(".edit-profile__text");
  let jobInput = document.querySelector(".edit-profile__about-me");

  profileName = document.querySelector(".profile__name");
  profileDescription = document.querySelector(".profile__description");

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeEdit();
  
}
function closePost() {
  let imageValue = document.querySelector(".new-post__url");
  let titleValue = document.querySelector(".new-post__text");
  imageValue.value = "";
  titleValue.value= "";
  document.querySelector(".new-post").classList.remove("new-post__open");
  document.removeEventListener("keydown", () => add());
  document.removeEventListener("click", () => out());
}

function newPost() {
  document.querySelector(".new-post").classList.add("new-post__open");
}

function addPost() {
  let imageValue = document.querySelector(".new-post__url");
  let titleValue = document.querySelector(".new-post__text");

  const cardCopy = updateCard.cloneNode(true);

  cardCopy.id = initialCards[initialCards.length - 1].id + 1;

  let imagen = cardCopy.querySelector(".update__image");
  imagen.src = imageValue.value;
  imagen.alt =  "fotografía de " + titleValue.value

  imagen.onclick = function zoomPic() {
    let popZoom = document.querySelector(".zoom");
    popZoom.classList.remove("zoom-disabled");
    popZoom.classList.add("zoom__open");
    let popImage = document.querySelector(".zoom__image");
    popImage.src = imageValue.value;
    popImage.alt = "fotografía de " + titleValue.value;
    let popTitle = document.querySelector(".zoom__title");
    popTitle.textContent = titleValue.value;
  };
  let like = cardCopy.querySelector(".update__like-btn");

  like.addEventListener("click", function () {
    if (
      cardCopy
        .querySelector(".update__like-btn")
        .classList.contains("update__liked_btn")
    ) {
      cardCopy
        .querySelector(".update__like-btn")
        .classList.remove("update__liked_btn");
    } else {
      cardCopy
        .querySelector(".update__like-btn")
        .classList.add("update__liked_btn");
    }
  });
  let deleteButton = cardCopy.querySelector(".update__delete-btn");

  deleteButton.addEventListener("click", function () {
    const deletePicture = cardCopy;
    deletePicture.remove();
    initialCards.forEach((cardElement, index) => {
      if (cardElement.id == cardCopy.id) {
        initialCards.splice(index, 1);
      }
    });
  });

  let texto = cardCopy.querySelector(".update__title");
  texto.textContent = titleValue.value;
  container.prepend(cardCopy);

  initialCards.push({
    link: imageValue.value,
    name: titleValue.value,
    id: initialCards[initialCards.length - 1].id + 1,
  });
  closePost();
}
editProf.addEventListener('submit', handleProfileFormSubmit);
newPoste.addEventListener('submit', addPost);
document.addEventListener("keydown", (e) => add(e));

function add(evt) {
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
  } else if (
    evt.key === "Enter" &&
    editProf.classList.contains("edit-profile__open")
  ) {
    handleProfileFormSubmit();
  } else if (
    evt.key === "Enter" &&
    newPoste.classList.contains("new-post__open")
  ) {
    addPost();
  }
}

document.addEventListener("click", (e) => out (e));

function out(evt) {
  if (evt.target.classList.contains("edit-profile__open") &&editProf.classList.contains("edit-profile__open")
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
};
