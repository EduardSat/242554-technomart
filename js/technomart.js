var link = document.querySelector(".companies-contacts__btn");
var popup = document.querySelector(".companies-contacts__form");
var close = document.querySelector(".if-loose__close");

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("contacts-form-show");
 });
 
 close.addEventListener("click" , function(event) {
   event.preventDefault();
   popup.classList.remove("contacts-form-show");
 });