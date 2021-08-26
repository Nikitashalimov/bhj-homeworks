const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const closeButtons = document.querySelectorAll('.modal__close');
const replaceButtons = document.querySelector('.show-success');

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
	modalSuccess.classList.add('modal_active');
}
replaceButtons.addEventListener("click", replace);