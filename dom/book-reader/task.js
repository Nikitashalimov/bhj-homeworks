let sizeButtons = document.querySelectorAll('.font-size');
let book = document.getElementById('book');
let textColors = (document.querySelector('.book__control_color')).querySelectorAll('.color');
let bgColors = (document.querySelector('.book__control_background')).querySelectorAll('.color');
let bookContent = document.querySelector('book__content');

function deleteClassSize() {
	let activeButton = document.querySelector('.font-size_active');
	activeButton.classList.remove('font-size_active');
}

function deleteClassColor() {
	let activeBlock = document.querySelector('.color_active');
	activeBlock.classList.remove('color_active');
}

for (let sizeButton of sizeButtons) {
	sizeButton.addEventListener('click', function (e) {
		e.preventDefault();
		if (sizeButton.getAttribute('data-size') == 'small') {
			deleteClassSize();
			sizeButton.classList.add('font-size_active');
			book.classList.add('book_fs-small');
			book.classList.remove('font-size_big');
		} else if (sizeButton.getAttribute('data-size') == 'big') {
			deleteClassSize();
			sizeButton.classList.add('font-size_active');
			book.classList.remove('book_fs-small');
			book.classList.add('font-size_big');
		} else {
			deleteClassSize();
			sizeButton.classList.add('font-size_active');
			book.classList.remove('book_fs-small');
			book.classList.remove('font-size_big');
		}
	});
}

for (let textColor of textColors) {
	textColor.addEventListener('click', function (e) {
		e.preventDefault();
		if (textColor.getAttribute('data-text-color') == 'black') {
			deleteClassColor();
			textColor.classList.add('color_active');
			bookContent.classList.add("text_color_black");
			bookContent.classList.remove("text_color_gray");
			bookContent.classList.remove("text_color_whitesmoke");
		} else if (textColor.getAttribute('data-text-color') == 'gray') {
			deleteClassColor();
			textColor.classList.add('color_active');
			bookContent.classList.remove("text_color_black");
			bookContent.classList.add("text_color_gray");
			bookContent.classList.remove("text_color_whitesmoke");
		} else {
			deleteClassColor();
			textColor.classList.add('color_active');
			bookContent.classList.remove("text_color_black");
			bookContent.classList.remove("text_color_gray");
			bookContent.classList.add("text_color_whitesmoke");
		}
	});
}

for (let bgColor of bgColors) {
	bgColor.addEventListener('click', function (e) {
		e.preventDefault();
		if (bgColor.getAttribute('data-bg-color') == 'black') {
			deleteClassColor();
			bgColor.classList.add('color_active');
			bookContent.classList.add("bg_color_black");
			bookContent.classList.remove("bg_color_gray");
			bookContent.classList.remove("bg_color_white");
		} else if (bgColor.getAttribute('data-bg-color') == 'gray') {
			deleteClassColor();
			bgColor.classList.add('color_active');
			bookContent.classList.remove("bg_color_black");
			bookContent.classList.add("bg_color_gray");
			bookContent.classList.remove("bg_color_white");
		} else {
			deleteClassColor();
			bgColor.classList.add('color_active');
			bookContent.classList.remove("bg_color_black");
			bookContent.classList.remove("bg_color_gray");
			bookContent.classList.add("bg_color_white");
		}
	});
}
