// Selectors
const removeButtons = document.querySelectorAll('.remove-item');
const totalPriceElement = document.getElementById('total-price');

// Event Listeners for Remove Buttons
removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const cartItem = button.closest('.cart-item');
        const price = parseFloat(cartItem.querySelector('.cart-item-price').textContent.replace('Rs. ', ''));
        
        // Update Total Price
        updateTotalPrice(-price);

        // Remove the item from the DOM
        cartItem.remove();
    });
});

// Update Total Price Function
function updateTotalPrice(amount) {
    let currentTotal = parseFloat(totalPriceElement.textContent.replace('Rs. ', ''));
    currentTotal += amount;
    totalPriceElement.textContent = `Rs. ${currentTotal.toFixed(2)}`;
}
