let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let closeButtons = document.querySelectorAll('.modal__close');
let replaceButtons = document.querySelector('.show-success');

function activeModalMain() {
	modalMain.classList.add('modal_active');
};
setTimeout(activeModalMain, 1000);

for (let closeButton of closeButtons) {
	closeButton.onclick = function () {
		modalMain.classList.remove('modal_active');
		modalSuccess.classList.remove('modal_active');
	}
}

function replace() {
	modalMain.classList.remove('modal_active');
	modal_success.classList.add('modal_active');
}
replaceButtons.addEventListener("click", replace);
