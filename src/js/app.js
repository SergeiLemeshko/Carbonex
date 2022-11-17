import * as flsFunctions from "./modules/functions.js";
import menuBurger from "./modules/burger.js";
import form from "./modules/form.js";
import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper();
	flsFunctions.isWebp();
	menuBurger();
	form();
});



