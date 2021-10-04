const input = document.querySelector('.tasks__input');
const button = document.querySelector('.tasks__add');
const taskList = document.querySelector('.tasks__list');
const removeTasks = document.getElementsByClassName('task__remove');

button.addEventListener('click', (e) => {
	e.preventDefault();
	addDiv();
	input.value = '';
});

function addDiv() {
	taskList.innerHTML += `
	<div class="task">
		<div class="task__title">
			${input.value}
		</div>
		<a href="#" class="task__remove">&times;</a>
	</div>
	`;
}

for (let i = 0; i < removeTasks.length; i++) {
	i.addEventListener('click', () => {
		let removeItem = i.closest('.task');
		console.log(i);
		removeItem.remove();
	});
}