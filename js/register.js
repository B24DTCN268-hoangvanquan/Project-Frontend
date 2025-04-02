function myFunction() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    if (username === "" || password === "") {
        showSnackbar("Tài khoản hoặc mật khẩu không được để trống!!!");
        return;
    }
    if (password.length < 6) {
        showSnackbar("Mật khẩu phải có ít nhất 6 ký tự!!!");
        return;
    }
    if (username.indexOf("@") === -1 || username.indexOf(".com") === -1) {
        showSnackbar("Email phải có @ và .com!!!");
        return;
    }
    if (password !== confirmPassword) {
        showSnackbar("Mật khẩu phải trùng khớp!!!");
        return;
    }
    let userExists = users.some((user) => user.username === username);
    if (userExists) {
        showSnackbar("Tài khoản đã tồn tại!!!");
        return;
    }
    users.push({ id, username, password });
    localStorage.setItem("users", JSON.stringify(users));
    showSnackbar("Đăng ký thành công!");
    setTimeout(function () {
        window.location.href = "./login.html";
    }, 1500);
}
function showSnackbar(message) {
    let x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = message;
}