const button = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLinks = document.querySelectorAll('.dropdown__link');

button.onclick = function () {
	dropdownList.classList.toggle('dropdown__list_active');
};

for (dropdownLink of dropdownLinks) {
	dropdownLink.addEventListener('click', closeEvent);
}

function closeEvent(e) {
	const dropdownValue = document.querySelector('.dropdown__value');
	e.preventDefault();
	dropdownList.classList.remove('dropdown__list_active');
	dropdownValue.textContent = this.textContent;
}