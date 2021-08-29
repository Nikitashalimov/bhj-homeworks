/*
Первый уровень сложности

let remainingTime = document.getElementById('timer').innerHTML;

function oneSecondMinus() {
	if (remainingTime == 0) {
		alert('Вы победили в конкурсе!');
		return false; //судя по всему не подходит
	} else {
		remainingTime = remainingTime - 1;
		document.getElementById("timer").innerHTML = remainingTime;
	}
}

document.addEventListener('DOMContentLoaded', function () {
	setInterval(oneSecondMinus, 1000);
}, false);
*/

//Повышенный уровень сложности #2 (с загрузкой дистрибутива вотсапа на PC)

let remainingHours = document.getElementById('timer_hours').innerHTML;
let remainingMinutes = document.getElementById('timer_minutes').innerHTML;
let remainingSeconds = document.getElementById('timer_seconds').innerHTML;
let remainingAllTime = ((remainingHours * 3600) + (remainingMinutes * 60) + Number(remainingSeconds));

function timeMinus() {
	if (remainingAllTime == 0) {
		location.assign("https://web.whatsapp.com/desktop/windows/release/x64/WhatsAppSetup.exe");
		return false; //судя по всему не подходит
	} else {
		remainingAllTime = remainingAllTime - 1;
		remainingHours = Math.floor(remainingAllTime / 3600);
		if (remainingHours < 10) {
			remainingHours = '0' + remainingHours;
		}
		remainingMinutes = Math.floor((remainingAllTime - Math.floor(remainingHours * 3600)) / 60);
		if (remainingMinutes < 10) {
			remainingMinutes = '0' + remainingMinutes;
		}
		remainingSeconds = remainingAllTime - (remainingHours * 3600) - (remainingMinutes * 60);
		if (remainingSeconds < 10) {
			remainingSeconds = '0' + remainingSeconds;
		}
		document.getElementById("timer_hours").innerHTML = remainingHours;
		document.getElementById("timer_minutes").innerHTML = remainingMinutes;
		document.getElementById("timer_seconds").innerHTML = remainingSeconds;
	}
}

document.addEventListener('DOMContentLoaded', function () {
	setInterval(timeMinus, 1000);
}, false);
