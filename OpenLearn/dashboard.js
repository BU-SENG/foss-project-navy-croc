document.addEventListener("DOMContentLoaded", function() {
    const userType = localStorage.getItem("userType") || "guest";
    document.getElementById("userType").textContent = "Logged in as: " + userType.toUpperCase();

    if (userType === "teacher") {
        document.getElementById("uploadLink").style.display = "block";
    }
});
