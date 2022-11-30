
export default function formValidate(callback) {
	let regTel = /[0-9]/,
		regName = /[A-Za-zA-Яа-яЁё]/;
	// reg3 = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\],
	// reg4 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0;

	let inp = document.querySelector("#name"),
		spanN = document.querySelector(".span-n");


	document.querySelector('.form__button').onclick = function (e) {
		e.preventDefault();
		if (!validate(regName, inp.value)) {
			notValid(inp, spanN, "Пожалуйста, введите Ваше имя!");
		} else {
			valid(inp, spanN, '');
		}
	};

	function validate(regex, inp) {
		return regex.test(inp);
	}

	function notValid(inp, el, mess) {
		inp.classList.add('is-invalid');
		el.innerHTML = mess;
	}

	function valid(inp, el, mess) {
		inp.classList.remove('is-invalid');
		inp.classList.add('is-valid');
		el.innerHTML = mess;
	}
}

