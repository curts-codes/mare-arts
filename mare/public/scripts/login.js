document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  localStorage.setItem("loggedInUser", username);
  window.location.href = "index.html"; // redirect after login
});
