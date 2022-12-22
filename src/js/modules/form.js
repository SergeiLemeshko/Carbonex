export default function form(callback) {
	//--------------Функция показа и закрытия формы------------//
	function bindForm(trigger, modal, close) {
		//--------------Показать форму по клику------------//
		trigger.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault();
			}
			modal.style.display = "block";
			scrollSchift();
			document.body.style.overflow = "hidden";
		});

		//--------------Закрытие формы по клику на крестик------------//
		close.addEventListener('click', () => {
			modal.style.display = "none";
			document.body.style.overflow = "";
		});
	}

	const formBtn = document.querySelector('.header__button'),
		form = document.querySelector('.form'),
		closeForm = document.querySelector('.close');

	bindForm(formBtn, form, closeForm);
};