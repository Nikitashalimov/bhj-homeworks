const modal = document.getElementById("subscribe-modal");
const closeButtons = document.querySelector(".modal__close_times");

// функция получения куки
function getCookie(name) {
	const cookies = document.cookie.split(';')
	const result = cookies.find((item) => item.startsWith(name + "="));
	return result ? result.split("=").pop() : null
}

// при клике на закрытие, удаляем класс и записываем куки
closeButtons.addEventListener('click', () => {
	modal.classList.remove('modal_active');
	document.cookie = 'modal_active=active';
})

// если функция куки записана, то удаляем класс, если нет, то вешаем класс
if (getCookie("modal_active") === "active") {
	modal.classList.remove("modal_active");
} else {
	modal.classList.add("modal_active");
}
