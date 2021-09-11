const tabButtons = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tabButtons.length; i++) {
	tabButtons[i].addEventListener('click', function () {
		changeTab(i);
	}, false);
}


function changeTab(index) {
	let active = tabButtons.findIndex(item => item.classList.contains('tab_active'));
	tabButtons[active].classList.remove('tab_active');
	tabContents[active].classList.remove('tab__content_active');
	tabButtons[index].classList.add('tab_active');
	tabContents[index].classList.add('tab__content_active');
}
