let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
    navbar.classList.add("navbar-small");
} else {
    navbar.classList.remove("navbar-small");
}
});