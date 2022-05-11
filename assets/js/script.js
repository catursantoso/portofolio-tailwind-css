// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const FixedNav = header.offsetTop;
  const ToTop = document.querySelector("#to-top");

  if (window.pageYOffset > FixedNav) {
    header.classList.add("navbar-fixed");
    ToTop.classList.remove("hidden");
    ToTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    ToTop.classList.remove("flex");
    ToTop.classList.add("hidden");
  }
};

// Burger area
const burger = document.querySelector("#burger");
const NavMenu = document.querySelector("#nav-menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger-active");
  NavMenu.classList.toggle("hidden");
});
window.addEventListener("click", function (e) {
  if (e.target != burger && e.target != NavMenu) {
    burger.classList.remove("burger-active");
    NavMenu.classList.add("hidden");
  }
});

// Dark Mode
const DarkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

DarkToggle.addEventListener("click", function () {
  if (DarkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
  DarkToggle.checked = true;
} else {
  document.documentElement.classList.remove("dark");
  DarkToggle.checked = false;
}
