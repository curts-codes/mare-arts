const user = localStorage.getItem("currentUser");
const cartKey = user ? `cart-${user}` : "cart";
let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingIndex = cart.findIndex(item => item.name === productName);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ name: productName, price: price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Item added to cart!");
}


function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) {
    cartCountEl.textContent = totalCount;
  }
}

// Optionally call this on page load
updateCartCount();

}
