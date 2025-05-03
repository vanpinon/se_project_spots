const profileEditButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const modalCloseButton = editProfileModal.querySelector(".modal__close-button");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const profilePlusButton = document.querySelector(".profile__plus-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const addCardFormElement = document.querySelector("#new-post-modal-form");
const nameInput = document.querySelector("#card-caption-input");
const linkInput = document.querySelector("#card-image-input");

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(nameInput.value);
  console.log(linkInput.value);

  newPostModal.classList.remove("modal_is-opened");
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

profileEditButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

modalCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

profilePlusButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;

  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleProfileFormSubmit);
