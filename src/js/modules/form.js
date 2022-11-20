export default function form(callback) {
	//--------------Функция показа и закрытия формы------------//
	function bindForm(trigger, modal, close) {
		//--------------Показать форму по клуку------------//
		trigger.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault();
			}

			modal.style.display = "block";
			document.body.style.overflow = "hidden";
		});
		//--------------Закрытие формы по клику на крестик (если есть)------------//
		close.addEventListener('click', () => {
			modal.style.display = "none";
			document.body.style.overflow = "";
		});
		//--------------Закрытие формы по клику на область вне формы------------//
		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.style.display = "none";
				document.body.style.overflow = "";
			}
		});
	}

	const formBtn = document.querySelector('.header__button'),
		form = document.querySelector('.form'),
		closeForm = document.querySelector('.close');

	//---------Убрать сдвиг при скрытии скролла---------//

	// function calcScroll() {
	// 	let div = document.createElement('div');

	// 	div.style.width = '50px';
	// 	div.style.height = '50px';
	// 	div.style.overflow = 'scroll';
	// 	div.style.visibility = 'hidden';

	// 	document.body.appendChild(div);
	// 	let scrollWidth = div.offsetWidth - div.clientWidth;
	// 	div.remove();

	// 	return scrollWidth;
	// }

	// scroll = calcScroll();


	bindForm(formBtn, form, closeForm);
};

//6:13