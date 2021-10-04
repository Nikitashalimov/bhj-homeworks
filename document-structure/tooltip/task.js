let toolTips = document.querySelectorAll('.has-tooltip');
let header = document.querySelector('.header');

let tip = document.createElement("div");
tip.classList.add("tooltip");

toolTips.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		if (item.title === tip.innerText) {
			tip.classList.remove('tooltip_active');
			tip.innerText = 'null';
			return false;
		}
		let topPos = item.getBoundingClientRect().bottom;
		let leftPos = item.getBoundingClientRect().left;
		tip.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px`)
		tip.innerText = item.title;
		item.insertAdjacentElement('afterEnd', tip);
		tip.classList.add("tooltip_active");
	})
});
