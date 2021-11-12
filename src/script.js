"use strict";

//Nav Bar Links

const menu = document.querySelector(".menu__items");

/** Function clicks on a link and scroll to the html section, if the classlist doesn't contain "item__resume" */

menu.addEventListener("click", function (e) {
  if (!e.target.classList.contains("item__resume")) e.preventDefault();

  //Matching
  if (e.target.classList.contains("item__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const sections = document.querySelectorAll("section");

/** Function reveals a new section of the page when a certain point of the 
 * view port has crossed a specific marker, removes hidden class */

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

for (const section of sections) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
}


