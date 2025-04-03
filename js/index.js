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
// let itemPage = 4;
// let pages = Math.ceil(numbers.length / itemPage); // ra số trang
// let currentPage = 1;// trang hiện tại
// let start = 0;
// let end = 2;
// function calStartEnd() {
//     start = currentPage * itemPage - itemPage;// 8
//     end = currentPage * itemPage; //11
// }
// function showItems() {
//     let str = "";
//     for (let i = 0; i < numbers.length; i++) {
//         if (i >= start && i < end) {
//             str += `<li>${numbers[i]}</li>`
//         }
//     }
//     document.getElementById("items").innerHTML = str;

// }
// showItems();
// // hiển thị số trang 
// function showPages() {
//     let str = "";
//     for (let i = 0; i < pages; i++) {
//         str += ` <li class="item-li" onclick=clickPage(${i + 1})>${i + 1}</li>`
//     }
//     document.getElementsByClassName("pages")[0].innerHTML =
//         `
//                  <button>Previous</button>
//                  ${str}
//                  <button>Next</button>
//              `
// }
// showPages();
// // function chọn vào từng trang
// document.getElementsByClassName("item-li")[0].classList.add("active");
// function clickPage(index) {
//     console.log("index", index);
//     currentPage = index;
//     calStartEnd();
//     showItems();
//     let arrLi = document.getElementsByClassName("item-li");
//     for (let i = 0; i < arrLi.length; i++) {
//         if (i == index - 1) {
//             arrLi[i].classList.add("active");
//             console.log(arrLi[i]);
//         } else {
//             arrLi[i].classList.remove("active");
//         }
//     }
// }