const products = document.querySelectorAll('.product');
const shoppingCart = document.querySelector('.cart__products');

products.forEach(item => {
	const lotMinus = item.querySelector('.product__quantity-control_dec');
	const lot = item.querySelector('.product__quantity-value');
	const lotPlus = item.querySelector('.product__quantity-control_inc');
	const buy = item.querySelector('.product__add');
	lotPlus.addEventListener('click', () => {
		lot.innerHTML++;
	})
	lotMinus.addEventListener('click', () => {
		lot.innerHTML--;
		if (lot.innerHTML < 1) {
			lot.innerHTML = 1;
		}
	})
	buy.addEventListener('click', () => {
		const image = item.querySelector('img');
		const index = item.getAttribute('data-id');
		const cartProducts = shoppingCart.querySelectorAll('.cart__product');
		const product = cartProducts.find(i => {
			if (i.getAttribute('data-id') == index) {
				let value = product.querySelector('.cart__product-count');
				value.innerText = value.innerHTML + lot.innerHTML;
				return;
			}
		})
		shoppingCart.innerHTML += `
		<div class="cart__product" data-id=${index}>
                <img class="cart__product-image" src=${image.getAttribute('src')}>
                <div class="cart__product-count">${lot.innerHTML}</div>
            </div>
		`;
	})
});