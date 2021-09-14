let sizeButtons = document.querySelectorAll('.font-size');
let book = document.getElementById('book');
let textColors = (document.querySelector('.book__control_color')).querySelectorAll('.color');
let bgColors = (document.querySelector('.book__control_background')).querySelectorAll('.color');
let bookContent = document.querySelector('.book__content');

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
			bookContent.classList.add("book_color-black");
			bookContent.classList.remove("book_color-gray");
			bookContent.classList.remove("book_color-whitesmoke");
		} else if (textColor.getAttribute('data-text-color') == 'gray') {
			deleteClassColor();
			textColor.classList.add('color_active');
			bookContent.classList.remove("book_color-black");
			bookContent.classList.add("book_color-gray");
			bookContent.classList.remove("book_color-whitesmoke");
		} else {
			deleteClassColor();
			textColor.classList.add('color_active');
			bookContent.classList.remove("book_color-black");
			bookContent.classList.remove("book_color-gray");
			bookContent.classList.add("book_color-whitesmoke");
		}
	});
}

for (let bgColor of bgColors) {
	bgColor.addEventListener('click', function (e) {
		e.preventDefault();
		if (bgColor.getAttribute('data-bg-color') == 'black') {
			deleteClassColor();
			bgColor.classList.add('color_active');
			bookContent.classList.add("book_bg-black");
			bookContent.classList.remove("book_bg-gray");
			bookContent.classList.remove("book_bg-white");
		} else if (bgColor.getAttribute('data-bg-color') == 'gray') {
			deleteClassColor();
			bgColor.classList.add('color_active');
			bookContent.classList.remove("book_bg-black");
			bookContent.classList.add("book_bg-gray");
			bookContent.classList.remove("book_bg-white");
		} else {
			deleteClassColor();
			bgColor.classList.add('color_active');
			bookContent.classList.remove("book_bg-black");
			bookContent.classList.remove("book_bg-gray");
			bookContent.classList.add("book_bg-white");
		}
	});
}
