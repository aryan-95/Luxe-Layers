// JavaScript for the Add to Cart Button
document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".add-to-cart");
  
    cartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Item has been added to your cart!");
      });
    });
  });
  