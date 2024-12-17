
const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const productName = button.parentElement.querySelector('.product-name').textContent;
        const productPrice = button.parentElement.querySelector('.product-price').textContent;

        cart.push({ id: productId, name: productName, price: productPrice });
        alert(`${productName} has been added to your cart.`);
    });
});


console.log(cart);
