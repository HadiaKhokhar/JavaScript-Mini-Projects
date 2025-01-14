const searchBtn = document.getElementsByClassName('fa-solid')[0];
const searchInput = document.getElementById('searchInput');


searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('hide');
    searchInput.focus();
    searchInput.value = ""
})
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchInput.classList.add('hide');
        searchInput.blur();
    }
});