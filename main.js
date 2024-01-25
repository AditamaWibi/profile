// Toggle class active for sidebar
const navbarNav = document.querySelector(".navbar-nav");
document
  .querySelector("#hamburger-menu")
  .addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });

// Close sidebar
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
