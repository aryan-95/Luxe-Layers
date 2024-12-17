// Handle search button click
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search').value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
        // You can implement actual search functionality here
    } else {
        alert('Please enter a search term.');
    }
});

// Initialize cart count (Example only)
let cartCount = 0;

// Simulate adding to cart (Optional Example)
function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

// Example: Test adding items to cart
document.getElementById('search-btn').addEventListener('dblclick', addToCart); // For demonstration
// Example: Add interactivity to social media links
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        alert(`Redirecting to: ${link.textContent}`);
        // You can replace this alert with actual redirection logic
    });
});
