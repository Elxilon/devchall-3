const menuButton = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");
const navMobile = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    if (menuIcon.innerText === "menu") menuIcon.innerText = "close";
    else menuIcon.innerText = "menu";
    navMobile.classList.toggle("menu-hide");
    menuButton.classList.toggle("menu-fixed");
});