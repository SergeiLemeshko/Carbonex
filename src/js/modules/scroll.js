export default function scrollSchift() {

	function calcScroll() {
		let div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflow = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}
	scroll = calcScroll();
	console.log(scroll);



	// let getScrollBarSize = (function () {
	// 	let el = window.document.createElement('textarea'),
	// 		style = {
	// 			'visibility': 'hidden', 'position': 'absolute', 'zIndex': '-2147483647',
	// 			'top': '-1000px', 'left': '-1000px', 'width': '1000px', 'height': '1000px',
	// 			'overflow': 'scroll', 'margin': '0', 'border': '0', 'padding': '0'
	// 		},
	// 		support = el.clientWidth !== undefined && el.offsetWidth !== undefined;

	// 	for (let key in style) {
	// 		if (style.hasOwnProperty(key)) {
	// 			el.style[key] = style[key];
	// 		}
	// 	}

	// 	return function () {
	// 		let size = null;
	// 		if (support && window.document.body) {
	// 			window.document.body.appendChild(el);
	// 			size = [el.offsetWidth - el.clientWidth, el.offsetHeight - el.clientHeight];
	// 			window.document.body.removeChild(el);
	// 		}
	// 		return size;
	// 	};
	// })();

	// console.log(getScrollBarSize());
	// getScrollBarSize();


}





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
// console.log(scroll);

