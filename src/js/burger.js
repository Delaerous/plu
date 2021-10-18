const burger = document.querySelector(".burger");
const wrapper = document.querySelector(".header-wrapper");
const headerMain = document.querySelector(".header__main");
const menuList = document.querySelector(".menu__list");
const menu = document.querySelector(".menu");



burger.addEventListener("click", burgerToggle);

function burgerToggle() {
    wrapper.classList.toggle('header-wrapper--open');
    headerMain.classList.toggle('header__main--open');
    menuList.classList.toggle('menu__list--open');
    menu.classList.toggle('menu--open');
}