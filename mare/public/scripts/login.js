/// LOGIN handler
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem(email));

  if (!storedUser || storedUser.password !== password) {
    alert("Invalid email or password.");
    return;
  }

  localStorage.setItem("currentUser", email);
  localStorage.setItem("loggedInUser", email);

  // Redirect admin to admin.html, others to index.html
  if (email === "admin@marearts.com") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "index.html";
  }
});

// CREATE ACCOUNT handler
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("create-email").value.trim();
  const password = document.getElementById("create-password").value;

  if (localStorage.getItem(email)) {
    alert("An account with this email already exists.");
    return;
  }

  const newUser = {
    email,
    password,
    orders: []
  };

  localStorage.setItem(email, JSON.stringify(newUser));
  alert("Account created! Please log in.");
});
