"use strict";

const menu = document.querySelector(".menu__items");
const sections = document.querySelectorAll("section");
const projectSection = document.getElementById("section__project")

/** Function clicks on a link and scrolls smoothly to the html section, if the classlist doesn't contain "item__resume" */

function smoothScrolling(e){
  if (!e.target.classList.contains("item__resume")) {
    e.preventDefault();

    //Matching
    if (e.target.classList.contains("item__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  }
}

/** Function reveals a new section of the portfolio when a certain point of the 
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


/** Renders an individual project in projects section */
function renderProject(projects){

  for (const project of projects) {

    const {name, demo, img, date, detail, tech, github} = project

    const html = 
    `<div class="project__content">
        <div class="app__layout">
          <a class="app__link--demo" href="${demo}" target="_blank">
            <img 
              class="project__img" src="${img}" 
              alt="${name.toLowerCase()}-app" />
            <figurecaption class="app__demo">Live Demo</figurecaption>
          </a> 
        </div>
        <div class="app">
          <div class="app__header">
            <h2 class="app__info">${name}</h2>
            <p class="app__info--date">${date}</p>
          </div>
          <p class="app__detail">${detail}</p>
          <p class="app__detail">
            <b>Tech stack: </b>${tech}
          </p>
          <p class="app__detail">
            <b>GitHub:</b>
            <a class="app__link" href="${github}">${name.toLowerCase()} app</a>
          </p>
        </div>
    </div>`

    projectSection.insertAdjacentHTML("beforeend", html);
  }
}

renderProject(projectContainer);

for (const section of sections) {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
}

menu.addEventListener("click", smoothScrolling);