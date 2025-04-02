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