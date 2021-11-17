const loader = document.getElementById('loader');
const itemMenu = document.getElementById('items');
const url = 'https://netology-slow-rest.herokuapp.com';

function addDiv(key) {
	itemMenu.insertAdjacentHTML('beforeend',
		`<div class="item">
		<div class="item__code">
		${key.CharCode}
	</div>
	<div class="item__value">
		${key.Value}
	</div>
	<div class="item__currency">
		руб.
	</div>
	</div>`);
}

window.addEventListener('load', (e) => {
	e.preventDefault();
	sendRequest();
})

function sendRequest() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();
	xhr.onload = () => {
		if (xhr.status === 200) {
			loader.classList.remove('loader_active');
			const answer = JSON.parse(xhr.responseText);
			const valuteObj = answer.response.Valute;
			for (key in valuteObj) {
				addDiv(valuteObj[key]);
			}
		}
	}
}