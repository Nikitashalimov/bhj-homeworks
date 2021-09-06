const buttonPrev = document.querySelector('.slider__arrow_prev');
const buttonNext = document.querySelector('.slider__arrow_next');
const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const sliderDots = document.querySelectorAll('.slider__dot');
let index = 0;

buttonPrev.addEventListener("click", slidePrev);
buttonNext.addEventListener("click", slideNext);

function currentIndex(slideActive, index) {
	showSlide(slideActive, index);
	showDot(slideActive, index);
}

const showSlide = (slideActive, index) => {
	sliderItems[slideActive].classList.remove('slider__item_active');
	sliderItems[index].classList.add('slider__item_active');
}

const showDot = (slideActive, index) => {
	sliderDots[slideActive].classList.remove('slider__dot_active');
	sliderDots[index].classList.add('slider__dot_active');
}

function slideNext() {
	let slideActive = sliderItems.findIndex(item => item.classList.contains('slider__item_active'));
	(slideActive == sliderItems.length - 1) ? index = 0 : index++;
	currentIndex(slideActive, index);
}

function slidePrev() {
	let slideActive = sliderItems.findIndex(item => item.classList.contains('slider__item_active'));
	(slideActive == 0) ? index = sliderItems.length - 1 : index--;
	currentIndex(slideActive, index);
}