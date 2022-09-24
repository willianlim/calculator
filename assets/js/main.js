function operations() {
	if (this.innerHTML == "=") {
		value.innerHTML = eval(value.innerHTML);
	} else {
		if (this.innerHTML == "Clear") {
			value.innerHTML = "";
		} else {
			value.innerHTML += this.innerHTML;
		}
	}
}

function dark_mode() {
	let	body;

	body = document.querySelector('body');
	body.classList.toggle('dark');
}

window.onload = function do_the_math() {
	let	btn;
	let	value;
	let	toggleBtn;

	btn = document.querySelectorAll('span');
	value = document.getElementById('value');
	toggleBtn = document.querySelector('.toggleBtn');

	for (let i = 0; i < btn.length; i++) {
		btn[i].addEventListener("click", operations)
	}
	toggleBtn.addEventListener("click", dark_mode)
}
