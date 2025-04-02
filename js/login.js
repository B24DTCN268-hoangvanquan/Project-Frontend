function myFunction() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(
        (user) => user.username === username && user.password === password
    );
    if (user) {
        showSnackbar("Đăng nhập thành công!");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    } else {
        showSnackbar("Sai tài khoản hoặc mật khẩu!");
    }
}
function showSnackbar(message) {
    let x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = message;
}