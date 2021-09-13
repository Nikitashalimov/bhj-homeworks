const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
let i = 0;
rotatorCases[i].style.color = rotatorCases[i].dataset.color;

function change() {
	rotatorCases[i].classList.add('rotator__case_active');
	rotatorCases[i].style.color = rotatorCases[i].dataset.color;
}

function takeOff() {
	rotatorCases[i].classList.remove('rotator__case_active');
}

function go() {
	setTimeout(function () {
		if (i == rotatorCases.length - 1) {
			takeOff()
			i = 0;
			change();
		} else {
			takeOff()
			i++;
			change();
		};
		go();
	}, rotatorCases[i].dataset.speed);
};
go();