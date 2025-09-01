const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

const profileAddBtn = document.querySelector(".profile__add-btn");
const profileAddModal = document.querySelector("#new-post-modal");
const profileAddCloseBtn = profileAddModal.querySelector(".modal__close-btn");

profileAddBtn.addEventListener("click", function () {
  profileAddModal.classList.add("modal_is-opened");
});

profileAddCloseBtn.addEventListener("click", function () {
  profileAddModal.classList.remove("modal_is-opened");
});
