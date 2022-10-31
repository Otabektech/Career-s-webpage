///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("mobile-nav--show");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

const headerElement = document.querySelector("#header");
const navElement = document.querySelector(".nav");
let options = {
  root: null,
  rootMargin: `-150px`,
  threshold: 0,
};

function stickyNavigation(entries) {
  let ent = entries[0];

  if (ent.isIntersecting === false) {
    navElement.classList.add("sticky");
  }

  if (ent.isIntersecting === true) {
    navElement.classList.remove("sticky");
  }
}

const observer = new IntersectionObserver(stickyNavigation, options);

observer.observe(headerElement);

const menuIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");
const mobileNav = document.querySelector(".mobile-nav");

menuIcon.addEventListener("click", function () {
  mobileNav.classList.add("mobile-nav--show");
});

closeIcon.addEventListener("click", function () {
  mobileNav.classList.remove("mobile-nav--show");
});
