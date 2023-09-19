let editOpen = document.querySelector(".edit-profile__open");
let profileContainer = document.querySelector(".profile__container");
let profileEditButton = document.getElementsByClassName(".profile__edit_btn");
const container = document.querySelector(".update");
const card = document.querySelector(".card");
const updateCard = document.querySelector(".update__card");

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
  document.querySelector(".zoom").classList.add("zoom__closed");
}

initialCards.forEach((card, index) => {
  if (index == 0) {
    let imagen = updateCard.querySelector(".update__image");
    imagen.src = card.link;
    imagen.onclick = function zoomPic() {
      let popZoom = document.querySelector(".zoom");
      popZoom.classList.remove("zoom__closed");
      popZoom.classList.add("zoom__open");
      let popImage = document.querySelector(".zoom__image");
      popImage.src = card.link;
      let popTitle = document.querySelector(".zoom__title");
      popTitle.textContent = card.name;
    };
    let texto = updateCard.querySelector(".update__title");
    texto.textContent = card.name;

    let like = updateCard.querySelector(".update__like_btn");

    like.addEventListener("click", function () {
      if (
        updateCard.querySelector(".update__like_btn").classList.contains("update__liked_btn")
      ) {
        updateCard.querySelector(".update__like_btn").classList.remove("update__liked_btn");
      } else {
        updateCard.querySelector(".update__like_btn").classList.add("update__liked_btn");
      }
    });

    let deleteButton = updateCard.querySelector(".update__delete_btn");
    deleteButton.addEventListener("click", function () {
      const deletePicture = updateCard;
      deletePicture.remove();
      initialCards.forEach((card) => {
        if (card.id == index) {
          initialCards.splice(card.id, 1);
        }
      });
    });
  } else {
    const cardCopy = updateCard.cloneNode(true);
    cardCopy.id = index;
    let imagen = cardCopy.querySelector(".update__image");
    imagen.src = card.link;
    imagen.onclick = function zoomPic() {
      let popZoom = document.querySelector(".zoom");
      popZoom.classList.remove("zoom__closed");
      popZoom.classList.add("zoom__open");
      let popImage = document.querySelector(".zoom__image");
      popImage.src = card.link;
      let popTitle = document.querySelector(".zoom__title");
      popTitle.textContent = card.name;
    };
    let texto = cardCopy.querySelector(".update__title");
    texto.textContent = card.name;

    let like = cardCopy.querySelector(".update__like_btn");

    like.addEventListener("click", function () {
      if (
        cardCopy.querySelector(".update__like_btn").classList.contains("update__liked_btn")
      ) {
        cardCopy.querySelector(".update__like_btn").classList.remove("update__liked_btn");
      } else {
        cardCopy.querySelector(".update__like_btn").classList.add("update__liked_btn");
      }
    });
    let deleteButton = cardCopy.querySelector(".update__delete_btn");
    deleteButton.addEventListener("click", function () {
      const deletePicture = cardCopy;
      deletePicture.remove();
      initialCards.forEach((card) => {
        if (card.id == index) {
          initialCards.splice(card.id, 1);
        }
      });
    });

    container.append(cardCopy);
  }
});

function editProfile() {
  document.querySelector(".edit-profile").classList.add("edit-profile__open");
}
function closeEdit() {
  document.querySelector(".edit-profile").classList.remove("edit-profile__open");
}

function handleProfileFormSubmit() {
  let nameInput = document.querySelector(".edit-profile__text");
  let jobInput = document.querySelector(".edit-profile__about-me");

  profileName = document.querySelector(".profile__name");
  profileDescription = document.querySelector(".profile__desciption");

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeEdit();
}
function closePost() {
  document.querySelector(".new-post").classList.remove("new-post__open");
}

function newPost() {
  document.querySelector(".new-post").classList.add("new-post__open");

  imageValue = document.querySelector(".new-post__url");
  titleValue = document.querySelector(".new-post__text");

  let addButton = document.querySelector(".new-post__create_btn");
  addButton.addEventListener("click", ()=> addPost(imageValue,titleValue) )
}

function addPost(imageValue,titleValue) {
  const cardCopy = updateCard.cloneNode(true);
 
cardCopy.id = initialCards[initialCards.length - 1].id +1; 
  let imagen = cardCopy.querySelector(".update__image");
  imagen.src = imageValue.value;

  imagen.onclick = function zoomPic() {
    let popZoom = document.querySelector(".zoom");
    popZoom.classList.remove("zoom__closed");
    popZoom.classList.add("zoom__open");
    let popImage = document.querySelector(".zoom__image");
    popImage.src = imageValue.value;
    let popTitle = document.querySelector(".zoom__title");
    popTitle.textContent = titleValue.value;
  };
  let like = cardCopy.querySelector(".update__like_btn");

  like.addEventListener("click", function () {
    if (
      cardCopy.querySelector(".update__like_btn").classList.contains("update__liked_btn")
    ) {
      cardCopy.querySelector(".update__like_btn").classList.remove("update__liked_btn");
    } else {
      cardCopy.querySelector(".update__like_btn").classList.add("update__liked_btn");
    }
  });
  let deleteButton = cardCopy.querySelector(".update__delete_btn");
  deleteButton.addEventListener("click", function () {
    const deletePicture = cardCopy;
    deletePicture.remove();
    initialCards.forEach((card) => {
      if (card.id == index) {
        initialCards.splice(card.id, 1);
      }
    });
  });
  let texto = cardCopy.querySelector(".update__title");
  texto.textContent = titleValue.value;
  container.prepend(cardCopy);

  initialCards.push({
    link: imageValue.value,
    name: titleValue.value,
    id:initialCards[initialCards.length - 1].id +1
  });
  closePost();
}

function closePost() {
  document.querySelector(".new-post").classList.remove("new-post__open");
}