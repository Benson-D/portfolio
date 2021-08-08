"use strict";

//Nav Bar Links
const menu = document.querySelector(".menu__items");

//Smooth Scrolling
menu.addEventListener("click", function (e) {
  if (!e.target.classList.contains("item__resume")) e.preventDefault();

  //Matching
  if (e.target.classList.contains("item__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
