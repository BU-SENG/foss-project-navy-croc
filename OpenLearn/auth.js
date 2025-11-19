document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const role = document.getElementById("role").value;
    localStorage.setItem("userRole", role);
    window.location.href = "dashboard.html";
});
