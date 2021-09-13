let sizeButtons = document.querySelectorAll('.font-size');
let book = document.getElementById('book');
let textColors = (document.querySelector('.book__control_color')).querySelectorAll('.color');
let bgColors = (document.querySelector('.book__control_background')).querySelectorAll('.color');
let bookContent = document.querySelector('book__content');

function deleteClass() {
	let activeButton = document.querySelector('.font-size_active');
	activeButton.classList.remove('font-size_active');
}

for (let sizeButton of sizeButtons) {
	sizeButton.addEventListener('click', function (e) {
		e.preventDefault();
		if (sizeButton.getAttribute('data-size') == 'small') {
			deleteClass();
			sizeButton.classList.add('font-size_active');
			book.classList.add('book_fs-small');
			book.classList.remove('font-size_big');
		} else if (sizeButton.getAttribute('data-size') == 'big') {
			deleteClass();
			sizeButton.classList.add('font-size_active');
			book.classList.remove('book_fs-small');
			book.classList.add('font-size_big');
		} else {
			deleteClass();
			sizeButton.classList.add('font-size_active');
			book.classList.remove('book_fs-small');
			book.classList.remove('font-size_big');
		}
	});
}

for (let color of colors) {
	color.addEventListener('click', function (e) {
		e.preventDefault();
		let attributeText = color.getAttribute("data-text-color");
		if (attributeText) {
			for (let item of colors) {
				if (item.getAttribute("data-text-color"));
				item.classList.remove("color_active");
			}
			color.classList.add("color_active");
			if (attribute == 'black') {
				bookContent.classList.add("book_color-black");
				bookContent.classList.remove("book_color-gray");
				bookContent.classList.remove("book_color-whitesmoke");
			} else if (attribute == 'gray') {
				bookContent.classList.remove("book_color-black");
				bookContent.classList.add("book_color-gray");
				bookContent.classList.remove("book_color-whitesmoke");
			} else {
				bookContent.classList.remove("book_color-black");
				bookContent.classList.remove("book_color-gray");
				bookContent.classList.add("book_color-whitesmoke");
			}
		} else {
			let attributeBg = color.getAttribute("data-bg-color");
			if (attributeBg) {
				for (let item of colors) {
					if (item.getAttribute("data-bg-color"));
					item.classList.remove("color_active");
				}
				color.classList.add("color_active");
				if (attribute == 'black') {
					bookContent.classList.add("bg_color_black");
					bookContent.classList.remove("bg_color_gray");
					bookContent.classList.remove("bg_color_white");
				} else if (attribute == 'gray') {
					bookContent.classList.remove("bg_color_black");
					bookContent.classList.add("bg_color_gray");
					bookContent.classList.remove("bg_color_white");
				} else {
					bookContent.classList.remove("bg_color_black");
					bookContent.classList.remove("bg_color_gray");
					bookContent.classList.add("bg_color_white");
				}

			}
		}
	});
}