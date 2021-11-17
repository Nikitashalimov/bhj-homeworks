const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const url = 'https://netology-slow-rest.herokuapp.com/poll.php';

window.addEventListener('load', (e) => {
	e.preventDefault();
	sendRequest();
})

function addButton(key) {
	pollAnswers.insertAdjacentHTML('beforeend',
		`<button class="poll__answer">${key}</button>`);
}

function dialogBox() {
	pollAnswers.insertAdjacentHTML('afterend',
		`<dialog open>Спасибо, ваш голос засчитан!</dialog>`);
}

function sendRequest() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();
	xhr.onload = () => {
		if (xhr.status === 200) {
			const json = JSON.parse(xhr.responseText);
			const title = json.data.title;
			pollTitle.innerText = title;
			const answers = json.data.answers;
			console.log(answers.length);
			for (let i = 0; i < answers.length; i++) {
				addButton(answers[i]);
				console.log(answers[i]);
			}
			const buttons = document.querySelectorAll('.poll__answers');
			buttons.forEach(button => {
				button.addEventListener('click', dialogBox)
			});
		};
	};
}