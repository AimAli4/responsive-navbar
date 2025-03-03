//function toggleMenu() {
   // document.querySelector(".nav-links").classList.toggle("show");
//}
// Select elements
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

// Toggle mobile menu
menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
