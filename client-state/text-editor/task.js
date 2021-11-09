const textArea = document.getElementById('editor');

// перед перезагрузкой страницы сохраняем текст в 
window.onunload = () => {
	localStorage.setItem('textSave', textArea.value);
}

// при загрузке страницы, достаем сохранненые данные
window.onload = () => {
	textArea.value = localStorage.getItem('textSave');
}