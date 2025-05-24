document.addEventListener("DOMContentLoaded", () => {
  const userEmail = localStorage.getItem("currentUser");

  if (!userEmail) {
    window.location.href = "account.html"; // redirect if not logged in
    return;
  }

  const userData = JSON.parse(localStorage.getItem(userEmail));
  const orders = userData?.orders || [];

  const greeting = document.getElementById("user-greeting");
  const ordersList = document.getElementById("orders-list");

  if (greeting) {
    greeting.textContent = `Hello, ${userEmail}. Here are your orders:`;
  }

  if (orders.length === 0) {
    ordersList.innerHTML = "<p>You have no orders yet.</p>";
    return;
  }

  function renderOrders(filter = "all") {
  ordersList.innerHTML = ""; // Clear existing

  const filteredOrders = filter === "all"
    ? userOrders
    : userOrders.filter(order => (order.status || "Pending") === filter);
  renderOrders(); // default render on load


  if (filteredOrders.length === 0) {
    ordersList.innerHTML = "<p>No orders match that filter.</p>";
    return;
  }

  filteredOrders.forEach((order, index) => {
    const div = document.createElement("div");
    div.classList.add("order-card");

    div.innerHTML = `
      <h3>Order #${index + 1}</h3>
      <p><strong>Date:</strong> ${order.date}</p>
      <p><strong>Status:</strong> <span class="badge ${order.status === "Shipped" ? "badge-shipped" : "badge-pending"}">${order.status || "Pending"}</span></p>
      <p><strong>Items:</strong></p>
      <ul>${order.items.map(item => `<li>${item.name} x${item.quantity}</li>`).join("")}</ul>
      <p><strong>Total:</strong> $${order.total}</p>
    `;
    ordersList.appendChild(div);
  });
}

});
document.getElementById("status-filter").addEventListener("change", (e) => {
  renderOrders(e.target.value);
});
