export default class UserInfo {
  constructor() {
    this._profileName = document.querySelector(".profile__name");
    this._profileDescription = document.querySelector(".profile__description");
    this._profileAvatar = document.querySelector(".profile__image");
  }

  setUserInfo(name, about, avatar = "") {
    this._profileDescription.textContent = about;
    this._profileName.textContent = name;
    if (avatar) {
      this._profileAvatar.src = avatar;
    }
  }

  setAvatar(avatar) {
    this._profileAvatar.src = avatar;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileDescription.textContent,
    };
  }
}
