var link = document.querySelector(".companies-contacts__btn");
var popup = document.querySelector(".contacts-if__loose");
var close = document.querySelector(".if-loose__close");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("contacts-if__loose");
});
close.addEventListener("click", function (event) {
      event.preventDefault();
      popup.classList.remove("contacts-if__loose"); 
    });
    
