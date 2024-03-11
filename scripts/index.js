function createCard(name, link, remove) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__title").textContent = name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", remove);
  document.querySelector(".places__list").append(cardElement);
}

function removeCallback(event) {
  const eventTarget = event.target;
  const deleteItem = eventTarget.closest("li");
  deleteItem.remove();
}
const addButton = document.querySelector(".profile__add-button");

addButton.addEventListener("click", function () {
  initialCards.forEach(function (item) {
    createCard(item.name, item.link, removeCallback);
  });
});

initialCards.forEach(function (item) {
  createCard(item.name, item.link, removeCallback);
});
// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
