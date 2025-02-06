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

let btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;
  let body =
    "name: " +
    name +
    "<br /> email: " +
    email +
    "<br /> subject: " +
    subject +
    "<br /> message: " +
    message;

  Email.send({
    // SecureToken: "7abfcf08-d7ce-4dd3-9f42-2a276c4cfcc5",
    Host: "smtp.elasticemail.com",
    Username: "lilly.golden@gmail.com",
    Password: "7EDBA97E71EF710AC86B83DFCEAFC11365FA",
    To: "lilly.golden@gmail.com",
    From: "lilly.golden@gmail.com",
    Subject: subject,
    Body: body,
  }).then((message) => alert(message));
});
