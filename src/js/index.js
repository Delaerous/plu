var swiper = new Swiper(".mySwiper", {
	speed: 600,
	parallax: true,
	loop: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	  type: 'bullets',
	},
	navigation: {
	  nextEl: ".carousel__next",
	  prevEl: ".carousel__prev",
	},
  })