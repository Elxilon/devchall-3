const menuButton = document.querySelector(".menu");
const menuIcon = document.querySelectorAll(".menu-icon");
const navMobile = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    menuIcon[0].classList.toggle("menu-hide");
    menuIcon[1].classList.toggle("menu-hide");
    navMobile.classList.toggle("menu-hide");
    menuButton.classList.toggle("menu-fixed");
});