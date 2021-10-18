const products = document.querySelectorAll('.product'); // основной блок
const shoppingCart = document.querySelector('.cart__products'); // корзина

products.forEach(item => {
	const lotMinus = item.querySelector('.product__quantity-control_dec'); // минус
	const lot = item.querySelector('.product__quantity-value'); // кол-во 
	const lotPlus = item.querySelector('.product__quantity-control_inc'); // плюс
	const buy = item.querySelector('.product__add'); // кнопка купить
	// увеличиваем кол-во товара
	lotPlus.addEventListener('click', () => {
		lot.innerHTML++;
	})
	// уменьшаем кол-во товара
	lotMinus.addEventListener('click', () => {
		lot.innerHTML--;
		if (lot.innerHTML < 1) {
			lot.innerHTML = 1;
		}
	})
	// добавляем товар в корзину
	buy.addEventListener('click', () => {
		const image = item.querySelector('img');
		const index = item.getAttribute('data-id');
		const cartProducts = shoppingCart.querySelectorAll('.cart__product');
		//при покупке ищем такой же елемент в корзине
		let product = Array.from(cartProducts).find(i => {
			if (i.getAttribute('data-id') == index) {
				return i;
			}
		});
		//если элемент есть, добавляем кол-во товаров и выходим из функции покупки
		if (product) {
			let value = product.querySelector('.cart__product-count');
			value.innerText = Number(value.innerHTML) + Number(lot.innerHTML);
			lot.innerHTML = 1;
			return;
		}
		// если в корзине такого элемента еще нет, то добавляем его
		shoppingCart.insertAdjacentHTML('beforeend', `
			<div class="cart__product" data-id=${index}>
					<img class="cart__product-image" src=${image.getAttribute('src')}>
					<div class="cart__product-count">${lot.innerHTML}</div>
				</div>
			`);
		lot.innerHTML = 1;
	})
});
