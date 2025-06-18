import * as functions from "./functions/functions.min.js";
import { _Module } from './module.min.js'

/** Для коректного відображення webp із css */
functions.isWebp();

/* Додавання loaded для HTML після повного завантаження сторінки */
functions.isPageLoad();

/* Додавання класу touch для HTML якщо браузер мобільний */
// functions.isTouch();

/* Модуль для роботи з меню (Бургер) */
_Module.burger_menu.init();

/* Модуль для роботи з спостерігачем */
_Module.watcher.init();

/* Модуль для роботи з попапами */
_Module.popup.init();

/* Модуль для роботи із світлом */
_Module.light.init();

/* Форматування чисел */
// import wNumbMin from "./functions/wNumb.min.js";


/* Робота зі слайдером */
import "./libs/sliders.min.js";

/* Інше */

const cube = document.getElementById("cube");
if (cube) {
	const sides = cube.children;
	
	for (const side of sides) {
		side.addEventListener("click", e => {
			if (!cube.classList.contains("animated")) {
				cube.classList.add("animated");

				setTimeout(() => {
					cube.classList.remove("animated");
				}, 2500);
			}
		});
	}
}

const buttons = document.querySelectorAll(".product-card__picture_buttons");
if (buttons && buttons.length != 0) {
	buttons.forEach(button => {
		const card_picture = button.parentElement;
		const card_info = card_picture.querySelector(".product-card__picture_info");
		

		button.addEventListener("click", e => {
			card_picture.classList.toggle("_open");
		});

		card_info.addEventListener("click", e => {
			card_picture.classList.add("_open");
		});

		card_picture.addEventListener("mouseleave", e => {
			card_picture.classList.remove("_open");
		});
	});
}

// window.addEventListener("load", () => {
// 	const images = document.querySelectorAll("[data-image]");
// 	if (images && images.length != 0) {
// 		images.forEach(img => {
// 			img.setAttribute("width", img.offsetWidth);
// 			img.setAttribute("height", img.clientHeight);
// 		});
// 	}
// });

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('./sw.min.js')
			.then(reg => console.log('Service Worker зареєстровано:', reg))
			.catch(err => console.error('Помилка реєстрації SW:', err));
	});
}
