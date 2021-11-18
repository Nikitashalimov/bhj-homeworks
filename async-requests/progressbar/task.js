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
	// обработчик процесса
	xhr.upload.onprogress = function (e) {
		progress.value = e.loaded / e.total;
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
	xhr.open('POST', url);
	xhr.send(formData);
}