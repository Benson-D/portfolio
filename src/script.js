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

//Smooth Scrolling through sections
const sections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.12,
});

sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
