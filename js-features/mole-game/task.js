let holes = document.querySelectorAll('.hole');
let dead = document.getElementById('dead').innerHTML;
let lost = document.getElementById('lost').innerHTML;

for (let i = 0; i < holes.length; i++) {
	holes[i].addEventListener('click', clickHole);
}

function clickHole() {
	if (this.classList.contains('hole hole_has-mole')) {
		console.log('Попал');
		if (dead == '10') {
			alert('Ура!!! Победа!!!')
		} else {
			dead = Number(dead) + 1;
			document.getElementById('dead').innerHTML = dead;
		}
	} else {
		console.log('Мазила');
		if (lost == '5') {
			alert('Вы проиграли!!!');
		} else {
			lost = Number(lost) + 1;
			document.getElementById('lost').innerHTML = lost;
		}
	}
}