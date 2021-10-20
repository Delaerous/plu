const link = $('.menu__link');

let headerHeight = $('header').outerHeight() ;
link.on('click', (e) => {
  e.preventDefault();
  const currentLink = $(e.currentTarget);
  const dataValue = currentLink.attr('data-scroll-to');
  scrollToSection(dataValue); 
  if (menuList.classList.contains("menu__list--open")) {
    burgerToggle(); 
  }
});

const scrollToSection = (value) => {
  const elem = document.querySelector(`[data-section=${value}]`);
  window.scroll({
    left: 0,
    top: elem.offsetTop - headerHeight,
    behavior: "smooth"
  });
}
