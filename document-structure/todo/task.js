const input = document.querySelector('.tasks__input');
const button = document.querySelector('.tasks__add');
const taskList = document.querySelector('.tasks__list');

button.addEventListener('click', (e) => {
	e.preventDefault();
	if (input.value.trim()) {
		addDiv();
	}
	input.value = '';
});

function addDiv() {
	taskList.insertAdjacentHTML('beforeend',
		`
	<div class="task">
		<div class="task__title">
			${input.value}
		</div>
		<a href="#" class="task__remove">&times;</a>
	</div>
	`);
}

taskList.addEventListener("click", (e) => {
	let target = e.target;
	if (target.classList.contains("task__remove")) {
		e.preventDefault();
		e.target.closest(".task").remove();
	}
});