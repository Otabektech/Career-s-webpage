///////////////////////////////////////////////////////////
// Set current year
console.log("hello world");

// const headerElement = document.querySelector("#header");
// const navElement = document.querySelector(".nav");
// let options = {
//   root: null,
//   rootMargin: `-150px`,
//   threshold: 0,
// };

// function stickyNavigation(entries) {
//   let ent = entries[0];

//   if (ent.isIntersecting === false) {
//     navElement.classList.add("sticky");
//   }

//   if (ent.isIntersecting === true) {
//     navElement.classList.remove("sticky");
//   }
// }

// const observer = new IntersectionObserver(stickyNavigation, options);

// observer.observe(headerElement);

document.addEventListener("DOMContentLoaded", function (e) {
  const menuIcon = document.querySelector("#hamburger-icon");
  const closeIcon = document.querySelector("#close-icon");
  const mobileNav = document.querySelector(".mobile-nav");

  menuIcon.addEventListener("click", function () {
    mobileNav.classList.add("mobile-nav--show");
  });

  closeIcon.addEventListener("click", function () {
    mobileNav.classList.remove("mobile-nav--show");
  });
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
});
