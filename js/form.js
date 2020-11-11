const findHotel = document.querySelector(".find-hotel");
const findPopup = document.querySelector(".modal-form");

findHotel.addEventListener("click", function (evt) {
  evt.preventDefault();
  findPopup.classList.toggle("form-show");
});
