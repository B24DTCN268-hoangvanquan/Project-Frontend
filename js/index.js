function logout() {
    let select = document.getElementById("select");
    if (select.value === "logout") {
        document.getElementById("confirmModal").style.display = "flex";
    }
}
function confirmLogout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}
function closeModal() {
    document.getElementById("confirmModal").style.display = "none";
    document.getElementById("select").value = "";
}

// phân trang lịch sử giao dịch 
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".pagination button");
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            if (!["Previous", "Next"].includes(button.textContent)) {
                button.classList.add("active");
            }
        });
    });
});
