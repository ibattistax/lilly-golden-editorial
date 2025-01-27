document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".homepage-navbar");
  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom < 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

document.addEventListener("scroll", () => {
  const headers = document.querySelectorAll("h3.sticky-top-custom");
  headers.forEach((header) => {
    const rect = header.getBoundingClientRect();
    if (rect.top <= 75) {
      // When the header reaches the hero offset
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
  });
});
