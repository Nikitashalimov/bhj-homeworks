const sendButton = document.getElementById('send');
const progress = document.getElementById('progress');
const form = document.getElementById('form');
const url = 'https://netology-slow-rest.herokuapp.com/upload.php';



sendButton.addEventListener('click', (e) => {
	e.preventDefault();
	upload();
});

function upload() {
	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', url);
	xhr.send(formData);
	// обработчик процесса
	xhr.upload.onprogress = function (e) {
		let percent = Math.floor(e.loaded / e.total * 100);
		console.log(percent);
		if (percent === 0) {
			progress.value = 0.0;
		} else if (percent === 10) {
			progress.value = 0.1;
		} else if (percent === 20) {
			progress.value = 0.2;
		} else if (percent === 30) {
			progress.value = 0.3;
		} else if (percent === 40) {
			progress.value = 0.4;
		} else if (percent === 50) {
			progress.value = 0.5;
		} else if (percent === 60) {
			progress.value = 0.6;
		} else if (percent === 70) {
			progress.value = 0.7;
		} else if (percent === 80) {
			progress.value = 0.8;
		} else if (percent === 90) {
			progress.value = 0.9;
		} else if (percent === 100) {
			progress.value = 1.0;
		}
	}
	// обработчик успеха и ошибки
	xhr.onload = () => {
		if (xhr.status === 200) {
			console.log('УРАА');
			log('success');
		} else {
			console.log('ОШИБКА!!!');
			log("error " + this.status);
		}
	}
}