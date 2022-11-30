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
		// modal.addEventListener('click', (e) => {
		// 	if (e.target === modal) {
		// 		modal.style.display = "none";
		// 		document.body.style.overflow = "";
		// 	}
		// });
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

	//---------Валидация формы---------//

	// function validateForm() {
	// 	const form = document.getElementById('form');
	// 	form.addEventListener('submit', formSend);

	// 	async function formSend(e) {
	// 		e.preventDefault();

	// 		let error = formValidate(form);

	// 		if (error === 0) {

	// 		} else {
	// 			alert('dddddddd');
	// 		}
	// 	}

	// 	function formValidate(form) {
	// 		let error = 0;
	// 		let formReq = document.querySelectorAll('.__req');

	// 		for (let index = 0; index < formReq.length; index++) {
	// 			const input = formReq[index];
	// 			formRemoveError(input);

	// 			if (input.classList.contains('__email')) {
	// 				if (emailTest(input)) {
	// 					formAddError(input);
	// 					error++;
	// 				}
	// 			} else {
	// 				if (input.value === '') {
	// 					formAddError(input);
	// 					error++;
	// 				}
	// 			}

	// 		}

	// 	}
	// }
	// function formAddError(input) {
	// 	input.parentElement.classList.add('__error');
	// 	input.classList.add('__error');
	// }
	// function formRemoveError(input) {
	// 	input.parentElement.classList.remove('__error');
	// 	input.classList.remove('__error');
	// }
};