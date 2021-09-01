const buttonPrev = document.querySelector('.slider__arrow_prev');
const buttonNext = document.querySelector('.slider__arrow_next');
const sliderItems = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__dot');

buttonPrev.addEventListener("click", slidePrev);
buttonNext.addEventListener("click", slideNext);

let slideIndex = 1;
function currentIndex(index) {
	showSlide(index);
	showDot(index);
}

const showSlide = n => {
	for (sliderItem of sliderItems) {
		sliderItem.classList.remove('slider__item_active');
	}
	sliderItems[n].classList.add('slider__item_active');
}

const showDot = n => {
	for (sliderDot of sliderDots) {
		sliderDot.classList.remove('slider__dot_active');
	}
	sliderDots[n].classList.add('slider__dot_active');
}

function slideNext() {
	if (slideIndex == sliderItems.length - 1) {
		slideIndex = 0;
		currentIndex(slideIndex);
	} else {
		slideIndex++;
		currentIndex(slideIndex);
	}
};

function slidePrev() {
	if (slideIndex == 0) {
		slideIndex = sliderItems.length - 1;
		currentIndex(slideIndex);
	} else {
		slideIndex--;
		currentIndex(slideIndex);
	}
};

sliderDots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		slideIndex = indexDot;
		currentIndex(slideIndex);
	})
})
