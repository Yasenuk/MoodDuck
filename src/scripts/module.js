import { BurgerMenu } from "./modules/burger-menu.js";
import { Popup } from "./modules/popup.js";
import { Watcher } from "./modules/watcher.js";

export const _Module = {
	watcher: new Watcher(),
	burger_menu: new BurgerMenu(),
	popup: new Popup()
};