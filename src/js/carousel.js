

const slider1 = document.querySelector('.swiper-containerjs');

  let mySwiper1 = new Swiper(slider1, {
	slidesPerView: 5,
        spaceBetween: 30,
	loop: true,
	breakpoints: {
		50: {
			slidesPerView: 1,
		},
		320: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 5,
		}
	},
    
	navigation: {
		nextEl: '.carousel__next',
		prevEl: '.carousel__prev',
	},
});