const menuLinks = document.querySelectorAll('a[href=""]'); //коллекция ссылок

for (menuLink of menuLinks) { //событийный слушатель через цикл на ссылку
	menuLink.addEventListener("click", openCloseEvent);
}

function openCloseEvent() {
	if (this.nextElementSibling.classList.contains('menu_active')) { //если данное меню открыто
		this.nextElementSibling.classList.remove('menu_active'); //закрываем меню
		return false; //выходим из функции
	}
	const subMenuActive = document.querySelector('.menu_active'); //первое попавшееся открытое меню
	if (subMenuActive) { //если такое меню есть
		subMenuActive.classList.remove('menu_active'); //закрываем его
	}
	this.nextElementSibling.classList.add('menu_active'); //открываем тот, на который кликали
}

