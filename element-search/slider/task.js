const buttonPrev = document.querySelector('.slider__arrow_prev');
const buttonNext = document.querySelector('.slider__arrow_next');
const sliderItem = document.querySelectorAll('.slider__item');

buttonPrev.addEventListener("click", slidePrev);
buttonNext.addEventListener("click", slideNext);

let slideIndex = 1;
showSlide(slideIndex);

function slidePrev() {
	showSlide(slideIndex -= 1);
	console.log(slideIndex)
};

function slideNext() {
	showSlide(slideIndex += 1);
	console.log(slideIndex)
};

function slideCurrent(n) {
	showSlide(slideIndex = n);
}

function showSlide(n) {
	if (n > sliderItem.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = sliderItem.length
	}
	for (let i = 0; i < sliderItem.length; i++) {
		sliderItem[i].classList.add("slider__item_active");
	}
	sliderItem[slideIndex - 1].classList.remove("slider__item_active")
}
