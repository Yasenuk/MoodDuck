import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper.min.mjs";
import {
	Navigation,
	Autoplay,
	Pagination,
} from "https://cdn.jsdelivr.net/npm/swiper@11/modules/index.min.mjs";

function initSliders() {

	if (document.querySelector(".swiper-banner")) {
		new Swiper(".swiper-banner", {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 800,
			grabCursor: true,
			preloadImages: false,
			lazy: true,

			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},

			navigation: {
				prevEl: ".swiper-button-prev",
				nextEl: ".swiper-button-next",
			},
			on: {},
		});
	}

	if (document.querySelector(".swiper-card")) {
		new Swiper(".swiper-card", {
			modules: [Navigation, Pagination],
			grabCursor: true,
			slidesPerView: 4,
			spaceBetween: 8,
			speed: 800,

			loop: true,
			loopedSlides: 21,

			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				loadOnTransitionStart: true,
			},

			watchSlidesProgress: true,
			freeMode: true,

			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},

			navigation: {
				prevEl: ".swiper-button-prev",
				nextEl: ".swiper-button-next",
			},

			breakpoints: {
				340: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
			}
		});
	}

	if (document.querySelector(".swiper-review")) {
		new Swiper(".swiper-review", {
			modules: [Navigation, Pagination],
			grabCursor: true,
			slidesPerView: 2,
			spaceBetween: 8,
			speed: 800,
			// centeredSlides: true,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,

			// loop: true,

			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				loadOnTransitionStart: true,
			},

			watchSlidesProgress: true,
			freeMode: true,

			// Пагінація
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: ".swiper-button-prev",
				nextEl: ".swiper-button-next",
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 2,
				},
			},

			// Події
			on: {},
		});
	}

	if (document.querySelector(".swiper-menu")) {
		new Swiper(".swiper-menu", {
			grabCursor: true,
			slidesPerView: 2,
			spaceBetween: 8,
			speed: 800,
			loop: true,
			preloadImages: false,

			lazy: {
				loadPrevNext: true,
				loadOnTransitionStart: true,
			},

			watchSlidesProgress: true,
			freeMode: true,

			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
			},
		});
	}
}

window.addEventListener("load", function (e) {
	initSliders();
});
