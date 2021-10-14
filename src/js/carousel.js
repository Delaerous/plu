

const slider1 = document.querySelector('.swiper-containerjs');

  let mySwiper1 = new Swiper(slider1, {
	slidesPerView: 5,
        spaceBetween: 30,
	loop: true,
    
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
});