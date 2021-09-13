window.addEventListener('scroll', function () {
	const blocks = document.querySelectorAll('.reveal');
	for (block of blocks) {
		let blockPos = block.getBoundingClientRect();
		let windowHeight = window.innerHeight;
		if (blockPos.top >= 0 && blockPos.bottom <= windowHeight) {
			block.classList.add('reveal_active')
		} else {
			block.classList.remove('reveal_active')
		}
	}
});