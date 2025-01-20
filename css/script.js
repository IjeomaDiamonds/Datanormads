const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  console.log("Hamburger menu clicked");
  navLinks.classList.toggle("active");
});

//Close the menu when clicking outside

document.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});

// Contact form animation

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
  });
