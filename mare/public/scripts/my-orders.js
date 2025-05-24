document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("loggedInUser");
  const ordersList = document.getElementById("orders-list");
  const greeting = document.getElementById("user-greeting");

  greeting.textContent = `Hello, ${user}. Here are your orders:`;

  // Simulated data for now
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const userOrders = orders.filter(order => order.username === user);

  if (userOrders.length === 0) {
    ordersList.innerHTML = "<p>You have no orders yet.</p>";
    return;
  }

  userOrders.forEach((order, index) => {
    const div = document.createElement("div");
    div.classList.add("order-card");
    div.innerHTML = `
      <h3>Order #${index + 1}</h3>
      <p><strong>Date:</strong> ${order.date}</p>
      <p><strong>Items:</strong></p>
      <ul>${order.items.map(item => `<li>${item.name} x${item.quantity}</li>`).join("")}</ul>
      <p><strong>Total:</strong> $${order.total}</p>
    `;
    ordersList.appendChild(div);
  });
});
