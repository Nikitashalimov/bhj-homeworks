const sendButton = document.getElementById('signin__btn');
const url = 'https://netology-slow-rest.herokuapp.com/auth.php';
const form = document.getElementById('signin__form');
const welcome = document.querySelector('.welcome');
const user = document.getElementById('user_id');
const signin = document.getElementById('signin');


sendButton.addEventListener('click', (e) => {
	e.preventDefault();
	sendRequest();
})

function sendRequest() {
	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', url);
	xhr.send(formData);
	xhr.onload = () => {
		if (xhr.status === 200) {
			const response = JSON.parse(xhr.responseText);
			console.log(xhr.responseText);
			if (response.success) {
				signin.classList.remove("signin_active");
				user.textContent = response["user_id"];
				welcome.classList.add("welcome_active");
				localStorage.setItem("welcome_active", response["user_id"]);
			}
			else {
				signin.classList.remove("signin_active");
				welcome.textContent = "Неверный логин/пароль";
				welcome.classList.add("welcome_active");
			}
		}
	}
}

window.onload = () => {
	const open = localStorage.getItem("welcome_active");
	if (open) {
		signin.classList.remove("signin_active");
		user.textContent = open;
		welcome.classList.add("welcome_active");
	}
}