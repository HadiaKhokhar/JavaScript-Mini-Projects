const timer = document.querySelector('p');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const restartBtn = document.getElementById('restartBtn');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const themeBtn = document.getElementById('themeBtn')
const progressBar = document.getElementById('progress');
let darkmode = localStorage.getItem('darkmode');
let seconds = 60;
let interval = null;
let startTimer = () => {
    minutesElement.textContent = seconds != 0 ? '00' : '01'
    interval = setInterval(updateTime, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    restartBtn.disabled = false;
}
let updateTime = () => {
    secondsElement.textContent = (seconds < 10) ? '0' + --seconds : --seconds;
    progressBar.style.width = ((seconds / 60) * 100) + '%';
    if (seconds == 0) resetTimer()
}
const resetTimer = () => {
    stopTimer();
    seconds = 60;
    minutesElement.textContent = '01';
    secondsElement.textContent = '00';
    progressBar.style.width = '100%';
    startBtn.disabled = false;
    stopBtn.disabled = true;
    restartBtn.disabled = true

}
let stopTimer = () => {
    clearInterval(interval);
}
const enableDarkMode = () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem('darkmode', 'active');
}
const disableDarkMode = () => {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('darkmode', null);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', () => {
    stopTimer();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
restartBtn.addEventListener('click', resetTimer);
themeBtn.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode === 'active' ? disableDarkMode() : enableDarkMode();
});

if (darkmode === 'active') enableDarkMode();