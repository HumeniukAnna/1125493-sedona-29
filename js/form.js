const findHotel = document.querySelector(".find-hotel");
const findPopup = document.querySelector(".modal-form");
const findHotelForm = findPopup.querySelector(".find-hotel-form");
const arrivalDate = findPopup.querySelector(".form-arrival-date");
const departureDate = findPopup.querySelector(".form-departure-date");

findHotel.addEventListener("click", function (evt) {
  evt.preventDefault();
  findPopup.classList.toggle("form-show");
  arrivalDate.focus();
});

findHotelForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value) {
    evt.preventDefault();
    findPopup.classList.add("form-error");
  }
});
