let cookieButton = document.getElementById('cookie');
let counterClicker = document.getElementById('clicker__counter').innerHTML;

function clickCounterPlus() {
	counterClicker = Number(counterClicker) + 1;
	document.getElementById('clicker__counter').innerHTML = counterClicker;
}

function cookieSize() {
	if (counterClicker % 2 === 0) {
		cookieButton.width = '200';
	} else {
		cookieButton.width = '300';
	}
}

cookieButton.addEventListener('click', clickCounterPlus);
cookieButton.addEventListener('click', cookieSize);
cookieButton.addEventListener('click', speedClick);

let lastClick = new Date();

function speedClick() {
	let newClick = new Date();
	let timeClick = (newClick.getTime() - lastClick.getTime()) / 1000;
	lastClick = newClick;
	let countTime = (1 / timeClick).toFixed(2);
	document.getElementById("count__time").innerHTML = countTime;
}
