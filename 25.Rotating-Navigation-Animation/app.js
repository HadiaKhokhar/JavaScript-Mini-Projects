const toggleBtn = document.getElementById('toggle');
const container = document.querySelector('.container');
toggleBtn.addEventListener('click', () => {
    container.classList.toggle('show-nav');
})