
const menuLinks = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLinks.length; i++) {
	menuLinks[i].addEventListener("click", openEvent);
}

function openEvent() {
	this.nextElementSibling.onclick = function () {
		return false;
	}
	if (this.nextElementSibling.className === 'menu menu_sub menu_active') {
		this.nextElementSibling.classList.remove('menu_active');
	} else {
		this.nextElementSibling.classList.add('menu_active');
	}
}

//это было началом первого варианта решения...безуспешный совсем...чего-то мне не хватило...


const menuLinks = document.querySelectorAll('.menu__link');
const menuSub = document.querySelectorAll('.menu');

for (let menuLink of menuLinks) {
	menuLink.onclick = function () {
		this.nextElementSibling.classList.add('menu_active')
	}
}
