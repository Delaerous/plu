const link = $('.menu__link');

let header = document.getElementById('header');
link.on('click', (e) => {
  e.preventDefault();
  const currentLink = $(e.currentTarget);
  const dataValue = currentLink.attr('data-scroll-to');
  scrollToSection(dataValue); 
});

const scrollToSection = (value) => {
  const elem = document.querySelector(`[data-section=${value}]`);
  window.scroll({
    left: 0,
    top: elem.offsetTop - header.offsetHeight,
    behavior: "smooth"
  });
}