const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const profileAddBtn = document.querySelector(".profile__add-btn");
const profileAddModal = document.querySelector("#new-post-modal");
const profileAddCloseBtn = profileAddModal.querySelector(".modal__close-btn");
const profileAddLinkInput = profileAddModal.querySelector("#post-image-input");
const profileAddCaptionInput = profileAddModal.querySelector(
  "#post-caption-input"
);

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

profileAddBtn.addEventListener("click", function () {
  profileAddModal.classList.add("modal_is-opened");
});

profileAddCloseBtn.addEventListener("click", function () {
  profileAddModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddProfileSubmit(evt) {
  evt.preventDefault();
  const newPost = {
    link: profileAddLinkInput.value,
    caption: profileAddCaptionInput.value,
  };
  console.log("Adding new post:", newPost);
  profileAddModal.classList.remove("modal_is-opened");
}

profileAddModal.addEventListener("submit", handleAddProfileSubmit);
