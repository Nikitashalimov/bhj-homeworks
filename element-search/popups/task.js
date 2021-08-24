let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let closeButtons = document.querySelector('.modal__close');
let replaceButtons = document.querySelector('.show-success');

function activeModalMain() {
	modalMain.classList.add('modal_active');
};
setTimeout(activeModalMain, 3000);

function closeModal() {
	modalMain.classList.remove('modal_active');
}
closeButtons.addEventListener("click", closeModal);

function replace() {
	modalMain.classList.remove('modal_active');
	modal_success.classList.add('modal_active');
}
replaceButtons.addEventListener("click", replace);
