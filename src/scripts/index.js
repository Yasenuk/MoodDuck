import * as functions from "./functions/functions.js";
import { _Module } from './module.js'

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

/* Форматування чисел */
// import wNumbMin from "./functions/wNumb.min.js";


/* Робота зі слайдером */
import "./libs/sliders.js";

// const main = document.querySelector("main");
// const main_bg = document.querySelector(".main__bg");

// console.log(main.clientHeight, main_bg);


// main_bg.style.height = `${main.clientHeight}px`;