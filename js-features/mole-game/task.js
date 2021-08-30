let holes = document.querySelectorAll('.hole');
let dead = document.getElementById('dead').textContent;
let lost = document.getElementById('lost').textContent;

for (let i = 0; i < holes.length; i++) {
	holes[i].addEventListener('click', clickHole);
}

function resetScore() {
	dead = 0;
	lost = 0;
	document.getElementById('dead').textContent = 0;
	document.getElementById('lost').textContent = 0;
}

function clickHole() {
	if (this.classList.contains('hole_has-mole')) {
		console.log('Попал');
		if (dead == '10') {
			alert('Ура!!! Победа!!!');
			resetScore();
		} else {
			dead = Number(dead) + 1;
			document.getElementById('dead').textContent = dead;
		}
	} else {
		console.log('Мазила');
		if (lost == '5') {
			alert('Вы проиграли!!!');
			resetScore();
		} else {
			lost = Number(lost) + 1;
			document.getElementById('lost').textContent = lost;
		}
	}
}

