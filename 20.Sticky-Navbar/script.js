const navBar = document.getElementById("navbar");
const stickyPoint = navBar.offsetTop; // Get the original position of the navbar

window.addEventListener("scroll", function () {
    if (window.scrollY > stickyPoint) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky")
    }
});