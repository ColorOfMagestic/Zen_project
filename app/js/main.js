
// mobile menu
let menuButton = document.querySelector('.header_menu--mobile_button');
let headerMenu = document.querySelector('.header_menu--mobile');

menuButton.onclick = function () {
  menuButton.classList.toggle('header_menu--mobile_button__close');
  menuButton.classList.toggle('header_menu--mobile_button');

  headerMenu.classList.toggle('header_menu--mobile__close');
  headerMenu.classList.toggle('header_menu--mobile__active');

}