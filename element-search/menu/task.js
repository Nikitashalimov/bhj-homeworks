let menuLinks = document.querySelectorAll('.menu__link');
let menuSub = document.querySelectorAll('.menu_sub');

for (let menuLink of menuLinks) {
	menuLink.onclick = function () {
		menuSub.classList.add('menu_active');
	}
}