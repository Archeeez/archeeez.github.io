const burger = document.querySelector(".burger-btn"),
      // close = document.querySelector(".menu-close"),
      menu = document.querySelector(".menu_nav"),
      body = document.querySelector(".site-container")


burger.addEventListener("click", () => {
  menu.classList.toggle("menu_nav--active");
  burger.classList.toggle("burger-btn--active");
  document.body.classList.toggle('disable-scroll');
});