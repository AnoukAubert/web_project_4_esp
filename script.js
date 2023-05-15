let editOpen = document.querySelector('.edit-profile__open');
let profileContainer = document.querySelector('.profile__container')
/*let editProfile = document.querySelector('.edit-profile');*/
let profileEditButton = document.getElementsByClassName ('.profile__edit_btn')
/*let saveProfile = container.querySelector('.edit-profile__create_btn');
let closeProfile = container.querySelector('.edit-profile__close_btn');

saveProfile.addEventListener('click', profileEdit)*/
function editProfile() {
 document.querySelector('.edit-profile').classList.add('edit-profile__open');

}
function closeEdit() {
 document.querySelector('.edit-profile').classList.remove('edit-profile__open');
   
}
// Busquemos el formulario en el DOMD
let formElement = content.querySelector('.edit-profile__form');

// Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
    // Esta línea impide que el navegador
    // entregue el formulario en su forma predeterminada.
    evt.preventDefault();
    // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
    // Lo explicaremos todo con más detalle después.

    // Busquemos los campos del formulario en el DOM
    let nameInput = document.querySelector('edit-profile__text');
    let jobInput = document.querySelector('edit-profile__about-me')

    // Obtén los valores de cada campo desde la propiedad de valor correspondiente
    console.log(nameInput[0].value);
    console.log(jobInput[1].value);
    // Selecciona los elementos donde se introducirán los valores de los campos

    // Inserta nuevos valores utilizando el textContent
    // propiedad del método querySelector()
    nameInput.textContent = "value";
    jobInput.textContent = "value";
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formElement.addEventListener('submit', handleProfileFormSubmit);