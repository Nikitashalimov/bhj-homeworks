let cookieButton = document.getElementById('cookie');
let counterClicker = document.getElementById('clicker__counter');
let timeSpeed = document.getElementById("count__time");
let lastClick = new Date();

function clickCounterPlus() {
	Number(++counterClicker.textContent);
}

function cookieSize() {
	if (counterClicker % 2 === 0) {
		cookieButton.width = '200';
	} else {
		cookieButton.width = '300';
	}
}

function speedClick() {
	let newClick = new Date();
	let timeClick = (newClick.getTime() - lastClick.getTime()) / 1000;
	lastClick = newClick;
	let countTime = (1 / timeClick).toFixed(2);
	timeSpeed.textContent = countTime;
}

function allFunctionCookie() {
	clickCounterPlus();
	cookieSize();
	speedClick();
}

cookieButton.addEventListener('click', allFunctionCookie);
