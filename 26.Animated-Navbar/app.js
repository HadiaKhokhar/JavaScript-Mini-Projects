const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const menuIcon = document.querySelector('.fa-bars')
const closeIcon = document.querySelector('.fa-close')
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    closeIcon.classList.toggle('hide');
    menuIcon.classList.toggle('hide');

});