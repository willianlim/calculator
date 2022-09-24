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

window.onload = function do_the_math() {
	let	btn;
	let	value;
	let	buttons;

	btn = document.querySelectorAll('span');
	value = document.getElementById('value');
	buttons = document.querySelector('.buttons');

	for (let i = 0; i < btn.length; i++) {
		btn[i].addEventListener("click", operations)
	}
}
