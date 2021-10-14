

const slider1 = document.querySelector('.swiper-containerjs');

  let mySwiper1 = new Swiper(slider1, {
	slidesPerView: 5,
        spaceBetween: 30,
	loop: true,
    
	navigation: {
		nextEl: '.carousel__next',
		prevEl: '.carousel__prev',
	},
});