class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: "f80df4b9-cf83-4a10-a5c8-b4a26c62594d",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  updateUser(name, about) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: "f80df4b9-cf83-4a10-a5c8-b4a26c62594d",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((response) => response.json());
  }

  updateAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: {
        authorization: "f80df4b9-cf83-4a10-a5c8-b4a26c62594d",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        avatar,
      }),
    }).then((response) => response.json());
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: "f80df4b9-cf83-4a10-a5c8-b4a26c62594d",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  insertCard(link, name) {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: "f80df4b9-cf83-4a10-a5c8-b4a26c62594d",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        link,
        name,
      }),
    }).then((response) => response.json());
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      headers: {
        authorization: "f80df4b9-cf83-4a10-a5c8-b4a26c62594d",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((response) => response.json());
  }

  addLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      headers: {
        authorization: "f80df4b9-cf83-4a10-a5c8-b4a26c62594d",
        "Content-Type": "application/json",
      },
      method: "PUT",
    }).then((response) => response.json());
  }

  removeLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      headers: {
        authorization: "f80df4b9-cf83-4a10-a5c8-b4a26c62594d",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((response) => response.json());
  }
}

export const api = new Api(
  "https://around.nomoreparties.co/v1/web_es_11/",
  "f80df4b9-cf83-4a10-a5c8-b4a26c62594d"
);
