import * as flsFunctions from "./modules/functions.js";
import menuBurger from "./modules/burger.js";
import form from "./modules/form.js";
import formValidate from "./modules/validate.js";
import scrollSchift from "./modules/scroll.js";
import Swiper, { Navigation, Pagination } from 'swiper';


document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper();
	flsFunctions.isWebp();
	menuBurger();
	form();
	formValidate();
	scrollSchift();
});



