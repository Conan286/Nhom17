document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "123456") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginMessage").innerText = "Sai thông tin đăng nhập";
    }
});
