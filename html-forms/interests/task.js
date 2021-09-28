const interests = document.querySelectorAll(".interests");

for (let interest of interests) {
	let closest = interest.closest(".interest");
	if (closest) {
		let checkItem = closest.querySelector(".interest__check");
		checkItem.onclick = () => {
			if (checkItem.checked) {
				selection(closest, true);
			} else {
				selection(closest, false);
			}
		}
	}
}

function selection(closest, checked) {
	let items = closest.querySelectorAll(".interest__check");
	for (let item of items) {
		item.checked = checked;
	}
}