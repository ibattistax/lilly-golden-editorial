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
