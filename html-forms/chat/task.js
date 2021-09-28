const windowChat = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const chatContainer = document.querySelector('.chat-widget__messages-container');
let nowTime = new Date().getHours() + ':' + new Date().getMinutes();
let timer = 5000;

const botMessagesBox = [
	'Ку!',
	'Шо тебе надобно?!?!',
	'А расскажите поподробнее..',
	'Ладно, хватит, мне не интересно...',
	'Я ушел на обед',
	'Да отстаньте уже, дайте отдохнуть!!',
	'Сам такой!',
	'Бе-бе-бе',
	'Z-z-z-z....'
];

windowChat.addEventListener('click', () => {
	windowChat.classList.add('chat-widget_active');
	autoMessage();
})

input.addEventListener('keydown', (e) => {
	if (e.keyCode === 13 && input.value) {
		e.preventDefault();
		msg(input.value);
		input.value = null;
		msgBot(botMessagesBox[Math.floor(Math.random() * botMessagesBox.length)]);
		scroll();
		timer = 5000;
	}
})

//Функция добавления сообщения пользователем
function msg(a) {
	messages.innerHTML += `
  <div class="message_client">
    <div class="message__time">${nowTime}</div>
    <div class="message__text">
      ${a}
    </div>
  </div>
`;
}

//Функция добавления сообщения ботом
function msgBot(a) {
	messages.innerHTML += `
  <div class="message">
    <div class="message__time">${nowTime}</div>
    <div class="message__text">
      ${a}
    </div>
  </div>
`;
}

//Функция скролла вниз
function scroll() {
	chatContainer.style = 'overflow-y:scroll';
	chatContainer.scrollTop = 9999;
}

//Функция сообщения в простое
function autoMessage() {
	setInterval(() => {
		msgBot(botMessagesBox[Math.floor(Math.random() * botMessagesBox.length)]);
		scroll();
		console.log('Бот устал от тишины');
	}, timer);
}