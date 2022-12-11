export default function formValidate() {

	function validation(form) {

		function removeError(input) {
			const parent = input.parentNode;

			if (parent.classList.contains('error')) {
				parent.querySelector('.error-label').remove()
				parent.classList.remove('error')
			};
		};

		function createError(input, text) {
			const parent = input.parentNode;
			const errorLabel = document.createElement('label');

			errorLabel.classList.add('error-label');
			errorLabel.textContent = text;

			parent.classList.add('error');

			parent.append(errorLabel);
		};

		let result = true;

		const allInputs = form.querySelectorAll('input');

		for (const input of allInputs) {

			removeError(input);

			if (input.value == '') {
				createError(input, "Поле не заполнено!");
				result = false;
			}
		};
		return result;
	};

	document.getElementById('form').addEventListener('submit', function (event) {
		event.preventDefault();
		const formBody = document.querySelector('.form__body');

		if (validation(this) == true) {
			function sendInfo(formBody, text) {
				const form = formBody.parentNode;
				const sendOk = document.createElement('ok');

				sendOk.classList.add('send-ok');
				sendOk.textContent = text;

				form.classList.add('good-send');

				form.append(sendOk);
			};
			sendInfo(formBody, "Ваша заявка отправлена!");
		};

		event.target.reset();

		setTimeout(() => {
			function removeSend(formBody) {
				const form = formBody.parentNode;

				if (form.classList.contains('good-send')) {
					form.querySelector('.send-ok').remove()
					form.classList.remove('good-send')
				};
			};
			removeSend(formBody);
		}, 3000);
	});
};








