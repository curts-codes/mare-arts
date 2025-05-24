// Load or initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add product to cart
function addToCart(productName, price) {
  const existingIndex = cart.findIndex(item => item.name === productName);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ name: productName, price: price, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Update cart count in header
function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const cartCountEl = document.getElementById('cart-count');
  if (cartCountEl) {
    cartCountEl.textContent = totalCount;
  }
}
