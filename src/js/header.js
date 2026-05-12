export function initBurger() {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__burger-content");
  const closeBurger = document.querySelector(".header__btn-close");
  const overlay = document.querySelector(".header__overlay");

  function toggleMenu() {
    menu.classList.toggle("is-open");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  }

  burger.addEventListener("click", toggleMenu);

  closeBurger.addEventListener("click", toggleMenu);

  overlay.addEventListener("click", toggleMenu);
}
