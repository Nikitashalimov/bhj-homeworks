const menuLinks = document.querySelectorAll('a[href=""]');
const subMenuActives = document.querySelectorAll('.menu_sub');

for (let i = 0; i < menuLinks.length; i++) {
	menuLinks[i].addEventListener("click", openEvent);
}

function removeClass() {
	for (subMenuActive of subMenuActives) {
		if (this.subMenuActive.classList.contains('menu_active')) {
			subMenuActive.classList.remove('menu_active');
		} else {
			break;
		}
	}
}

function openEvent(e) {
	removeClass();
	e.preventDefault();
	this.nextElementSibling.classList.add('menu_active');
}

