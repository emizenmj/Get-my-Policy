document.addEventListener("DOMContentLoaded", function() {

  let scrollElement = window;
  let scrollElementPos = scrollElement.scrollY;

  let header = document.querySelector(".navbar-sticky");

  scrollElement.addEventListener("scroll", function () {

      scrollElementPos = scrollElement.scrollY;

      scrollElementPos > 140 ? header.classList.add("navbar-sticky-moved-up") : header.classList.remove("navbar-sticky-moved-up")

      scrollElementPos > 200 ? header.classList.add("navbar-sticky-transitioned") : header.classList.remove("navbar-sticky-transitioned")

      scrollElementPos > 300 ? header.classList.add("navbar-sticky-on") : header.classList.remove("navbar-sticky-on")

  })
});